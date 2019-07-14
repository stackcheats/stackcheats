import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const Tags = ({ location, pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`

	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<div className="container">
				<h4>{tagHeader}</h4>
			</div>
			<div className="container card-columns">
				{edges.map(({ node }) => {
					const { slug } = node.fields
					const { title, intro, author } = node.frontmatter

					return (
						<div className="card rounded-5" key={slug}>
							<div className="card-body">
								<h5 className="card-title">
									<Link
										style={{ textDecoration: `none` }}
										to={slug}
									>
										{title}
									</Link>
								</h5>
								<p className="card-text">{intro}</p>

								<footer className="blockquote-footer">
									<small className="text-muted">
										{author}
									</small>
								</footer>
							</div>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
}

export default Tags

export const pageQuery = graphql`
	query($tag: String) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						intro
						author
					}
				}
			}
		}
	}
`
