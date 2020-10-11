const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const blogPost = path.resolve(`./src/templates/blog-post.js`)
	const cheatPost = path.resolve(`./src/templates/cheat-post.js`)
	const infographicPost = path.resolve(`./src/templates/infographic-post.js`)
	const tagTemplate = path.resolve(`./src/templates/tag.js`)

	return graphql(
		`
			{
				blogsGroup: allMdx(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
					filter: { frontmatter: { cheat: { ne: true }, infographic: { ne: true }}}
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
							}
							body
						}
					}
				}
				cheatsGroup: allMdx(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
					filter: { frontmatter: { cheat: { in: true }}}
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
							}
							body
						}
					}
				}
				infographicsGroup: allMdx(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
					filter: { frontmatter: { infographic: { in: true }}}
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
							}
							body
						}
					}
				}
				tagsGroup: allMdx(limit: 2000) {
					group(field: frontmatter___tags) {
						fieldValue
					}
				}
			}
		`
	).then((result) => {
		if (result.errors) {
			throw result.errors
		}

		// Create blog posts pages.
		const posts = result.data.blogsGroup.edges
		posts.forEach((post, index) => {
			const previous =
				index === posts.length - 1 ? null : posts[index + 1].node
			const next = index === 0 ? null : posts[index - 1].node

			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			})
		})

		// create cheat post pages
		const cheats = result.data.cheatsGroup.edges
		cheats.forEach((cheat, index) => {
			createPage({
				path: cheat.node.fields.slug,
				component: cheatPost,
				context: {
					slug: cheat.node.fields.slug,
				}
			})
		})

		// create infographics pages
		const infographics = result.data.infographicsGroup.edges
		infographics.forEach((igraphic, index) => {
			createPage({
				path: igraphic.node.fields.slug,
				component: infographicPost,
				context: {
					slug: igraphic.node.fields.slug
				}
			})
		})

		// create tag pages
		const tags = result.data.tagsGroup.group
		tags.forEach(tag => {
			createPage({
				path: `/tags/${tag.fieldValue}/`,
				component: tagTemplate,
				context: {
					tag: tag.fieldValue,
				},
			})
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
