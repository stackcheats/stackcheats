import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="StackCheats"
          keywords={[`stackcheats`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="card-deck-scrollable flex-nowrap overflow-auto  my-5">
          {posts.slice(0, 4).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card p-4 rounded-lg" key={node.fields.slug}>
                <div className="card-body d-flex flex-column">
                  <h4
                    className="card-title"
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      className="text-dark"
                      style={{
                        textDecoration: `none`,
                        boxShadow: `none`,
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h4>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.short}</p>
                  <Link
                    className="btn btn-sm btn-light mt-auto"
                    style={{
                      width: "max-content",
                    }}
                    to={node.fields.slug}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="card-columns mb-5">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card p-4 rounded-lg" key={node.fields.slug}>
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      className="text-dark"
                      style={{
                        textDecoration: `none`,
                        boxShadow: `none`,
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h4>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.short}</p>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    to={node.fields.slug}
                  >
                    Read More
                  </Link>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            short
          }
        }
      }
    }
  }
`
