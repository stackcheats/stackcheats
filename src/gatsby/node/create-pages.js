const path = require(`path`)
const _ = require('lodash')

const query = `
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
              title
              category
              weight
              updated
              author
              short
              tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const createPages = ({ graphql, actions }) => {
	const stackcheatTemplate = path.resolve(
		`src/templates/stackcheat-template.js`
	)
	const tagsTemplate = path.resolve(`src/templates/tags-template.js`)

	return graphql(query).then(result => {
		if (result.errors) {
			throw result.errors
		}

		const stackcheats = result.data.allMarkdownRemark.edges

		// Create stackcheats pages
		stackcheats.forEach(({ node }) => {
			buildPage({ node, actions, stackcheatTemplate })
		})

		buildTagPage({ stackcheats, actions, tagsTemplate })
	})
}

function buildPage({ node, actions, stackcheatTemplate }) {
	const { createPage, createRedirect } = actions
	const path = node.fields.slug

	const context = {
		slug: path,
		node_id: node.id,
		nodePath: path,
		nodeType: 'sheet',
		title: node.frontmatter.title,
		category: node.frontmatter.category || 'stackcheat-story',
		weight: node.frontmatter.weight || 0,
		updated: node.frontmatter.updated,
		author: node.frontmatter.author,
		short: node.frontmatter.short,
		tags: node.frontmatter.tags,
	}

	createPage({
		path,
		component: stackcheatTemplate,
		context,
	})

	const aliases = node.frontmatter.aliases || []
	aliases.forEach(alias => {
		const paths = {
			fromPath: `/${alias}`,
			toPath: path,
		}

		createRedirect({
			...paths,
			isPermanent: true,
			redirectInBrowser: true,
		})
	})
}

function buildTagPage({ stackcheats, actions, tagsTemplate }) {
	const { createPage } = actions

	let tags = []
	_.each(stackcheats, edge => {
		if (_.get(edge, 'node.frontmatter.tags')) {
			tags = tags.concat(edge.node.frontmatter.tags)
		}
	})

	tags = _.uniq(tags)

	tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag)}/`,
			component: tagsTemplate,
			context: {
				tag,
			},
		})
	})
}

module.exports = createPages
