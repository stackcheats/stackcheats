import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { TagsList } from '../components/subcomponents/TagsList'

class StackCheatTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = this.props.data.site.siteMetadata.title

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.excerpt}
				/>

				<div className="container stackcheat-container my-5">
					<div className="row mb-2">
						{/* title block */}
						<div className="col">
							<h1 className="stackcheat--title">
								{post.frontmatter.title}
							</h1>
							<h4 className="stackcheat--sub-title text-secondary font-weight-light">
								{post.frontmatter.intro}
							</h4>
						</div>
					</div>

					<TagsList
						className="row stackcheat-tags"
						tags={post.frontmatter.tags}
					/>

					{/* intro block */}
					<div className="row stackcheat-body pt-4">
						<div
							className="col"
							dangerouslySetInnerHTML={{ __html: post.html }}
						/>
					</div>
				</div>
			</Layout>
		)
	}
}

export default StackCheatTemplate

export const pageQuery = graphql`
	query StackCheatBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				intro
				tags
			}
		}
	}
`
