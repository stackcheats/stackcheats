const { createFilePath } = require('gatsby-source-filesystem')

const onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })

		createNodeField({
			name: `slug`,
			node,
			value,
		})

		createNodeField({
			node,
			name: 'node_id',
			value: node.id,
		})

		createNodeField({
			node,
			name: 'category',
			value: node.frontmatter.category || 'stackcheat-story',
		})

		createNodeField({
			node,
			name: 'author',
			value: node.frontmatter.author || 'athiththan11',
		})

		createNodeField({
			node,
			name: 'short',
			value: node.frontmatter.short,
		})

		createNodeField({
			node,
			name: 'tags',
			value: node.frontmatter.tags,
		})
	}
}

module.exports = onCreateNode
