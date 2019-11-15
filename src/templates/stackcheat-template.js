import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { TagsList } from '../components/subcomponents/TagsList'

class StackCheatTemplate extends React.Component {
	render() {
		const post = this.props.data.mdx
		const siteTitle = this.props.data.site.siteMetadata.title

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.excerpt}
				/>

				<div className="container stackcheat-container py-5">
					<div className="row mb-2">
						{/* title block */}
						<div className="col">
							<h1 className="stackcheat--title text-light">
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

					{/* cover block */}
					{/* <div className="row mt-5">
                        <div className="col">
                            {coverBlock}
                        </div>
                    </div> */}

					{/* <div className="row mt-4">
						<div className="col">
							<p className="mb-0">
								<img
									src="https://avatars3.githubusercontent.com/u/29927177?s=460&v=4"
									alt="Avatar"
									className="avatar mb-0"
								/>
							</p>
						</div>
					</div> */}

					{/* intro block */}
					<div className="row stackcheat-body text-secondary-light pt-4">
						{/* <div
							className="col"
							dangerouslySetInnerHTML ={{ __html: post.html }}
                        /> */}
						<div className="col">
							<MDXRenderer className="col">
								{post.body}
							</MDXRenderer>
						</div>
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
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			frontmatter {
				title
				intro
				tags
				author
				cover {
					childImageSharp {
						fluid {
							base64
							tracedSVG
							aspectRatio
							src
							srcSet
							srcWebp
							srcSetWebp
							sizes
							originalImg
							originalName
							presentationWidth
							presentationHeight
						}
					}
				}
			}
			body
		}
	}
`
