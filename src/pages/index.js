import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title="stackcheats"
					keywords={[
						`stackcheats`,
						`stories`,
						`blogs`,
						`athiththan11`,
					]}
				/>

				<div className="container my-5">
					<div className="row">
						<div className="col">
							<h1 className="display-4 h-100 font-weight-normal text-muted">
								stack
                                <span className="font-weight-lighter">cheats</span>
                            </h1>
						</div>
					</div>
				</div>

                {/* story block */}
				<div className="container card-columns">
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug
                        const { intro, author, updated, cover, background } = node.frontmatter

                        let coverBlock;
                        if (cover != null) {
                            coverBlock = <Img fluid={cover.childImageSharp.fluid} className="card-img-top" />
                        }

						return (
							<div
								className="card border-0"
								key={node.fields.slug}
                            >
                                {coverBlock}
                                <div className="card-body rounded" style={{ backgroundColor: background }}>
									<h6 className="card-title">
										<Link
											to={node.fields.slug}
										>
											{title}
										</Link>
									</h6>
									<p className="card-text">{intro}</p>

									<footer className="blockquote-footer">
										<small className="text-muted">
											{author} on {updated}
										</small>
									</footer>
								</div>
							</div>
						)
					})}
                </div>

                <div className="container">
                    <div className="row my-5">
                        <div className="col">
                            <h3 className="font-weight-normal text-secondary">
                                cheat
                                <span className="font-weight-normal text-info">sheets</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* cheats block */}
				<div className="container card-columns">
					{posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        const { intro } = node.frontmatter

						return (
							<div
								className="card"
								key={node.fields.slug}
                            >
								<div className="card-body">
									<h6 className="card-title mb-0">
										<Link
											style={{ textDecoration: `none` }}
											to={node.fields.slug}
										>
											{title}
										</Link>
                                    </h6>
                                    <p className="card-text">{intro}</p>
                                </div>
                            </div>
						)
					})}
                </div>
			</Layout>
		)
	}
}

export default BlogIndex

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { title: { ne: "" }, intro: { ne: null } } }
		) {
			edges {
				node {
					excerpt
					frontmatter {
						title
						intro
						updated(formatString: "MMMM DD, YYYY")
                        author
                        background
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
					fields {
						slug
					}
				}
			}
		}
	}
`
