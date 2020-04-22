import React from 'react'

import { Link, graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Layout from '../components/Layout'

class TagsTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const { edges, totalCount } = this.props.data.allMdx
    const { title } = this.props.data.site.siteMetadata

    const countDescription = `#${totalCount} sheet${
      totalCount === 1 ? '' : 's'
    } have been tagged`

    return (
      <Layout location={this.props.location} title={title}>
        <div className="content-container mt-5">
          <h2>
            Tag : <span className="badge badge-primary">{tag}</span>
          </h2>
          <p
            className="text-muted"
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {countDescription}
          </p>
          <div className="my-4 mb-5">
            <ul>
              {edges.map(({ node }) => {
                return (
                  <li>
                    <div
                      className="card tags-card mb-3"
                      key={node.fields.slug}
                      style={{
                        backgroundColor: node.frontmatter.bgcolor,
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          <Link
                            className="text-dark"
                            style={{
                              textDecoration: `none`,
                              boxShadow: `none`,
                            }}
                            to={node.fields.slug}
                          >
                            {node.frontmatter.title}
                          </Link>
                        </h5>
                        <small className="text-muted">
                          {node.frontmatter.date}
                        </small>
                        <p className="card-text mt-0 text-muted font-weight-lighter">
                          {node.frontmatter.short}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TagsTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
            date(formatString: "MMMM DD, YYYY")
            short
          }
        }
      }
    }
  }
`
