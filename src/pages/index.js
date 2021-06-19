import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

import { Medium } from '@icons-pack/react-simple-icons'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const tags = data.tagCollection.group
    const cheats = data.cheatCollection.edges
    const infographics = data.infographicCollection.edges
    const reveals = data.revealCollection.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="StackCheats" />

        {/* horizontal scrollable card deck */}
        <div className="card-deck-scrollable flex-nowrap overflow-auto  my-5">
          {posts.slice(0, 4).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card p-4 rounded-lg" key={node.fields.slug}>
                <div className="card-body d-flex flex-column">
                  <h5
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
                  </h5>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.short}</p>
                  <div className="mt-auto">
                    <Link
                      className="btn btn-sm btn-light"
                      style={{
                        width: 'max-content',
                      }}
                      to={node.fields.slug}
                    >
                      View Content
                    </Link>
                    <a
                      className="btn btn-sm ml-2 rounded"
                      style={{
                        width: 'max-content',
                      }}
                      href={node.frontmatter.medium}
                    >
                      <Medium aria-label="Medium Reference" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* tag collection deck */}
        <div className="mb-5">
          {tags
            .sort((a, b) => {
              return b.totalCount - a.totalCount
            })
            .slice(0, 10)
            .map(({ fieldValue, totalCount }) => {
              if (totalCount > 1) {
                return (
                  <Link key={fieldValue} to={`/tags/${fieldValue}`}>
                    <span className="tag-badge badge badge-light ">
                      {fieldValue} <b>#{totalCount}</b>
                    </span>
                  </Link>
                )
              }
            })}
        </div>

        {/* card-columns deck */}
        <div className="card-columns mb-5">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                className="card p-4 rounded-lg"
                key={node.fields.slug}
                style={{
                  backgroundColor: node.frontmatter.bgcolor,
                }}
              >
                <div className="card-body">
                  <h5
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
                  </h5>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.short}</p>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    to={node.fields.slug}
                  >
                    View Sheet
                  </Link>
                  <a
                    className="btn btn-sm ml-2 mt-3 rounded"
                    href={node.frontmatter.medium}
                  >
                    <Medium size={24} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* card-columns deck for cheats */}
        <div className="card-columns mb-5">
          {cheats.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                className="card p-4 rounded-lg"
                key={node.fields.slug}
                style={{
                  backgroundColor: node.frontmatter.bgcolor,
                }}
              >
                <div className="card-body">
                  <h5
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
                  </h5>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.short}</p>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    to={node.fields.slug}
                  >
                    View Cheat
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* card-columns deck for infographics */}
        <div className="card-columns mb-5">
          {infographics.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card p-4 rounded-lg" key={node.fields.slug}>
                <div className="card-body">
                  <h5
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
                  </h5>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.intro}</p>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    to={node.fields.slug}
                  >
                    View Graphic
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* card-columns deck for reveal */}
        <div className="card-columns mb-5">
          {reveals.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card p-4 rounded-lg" key={node.fields.slug}>
                <div className="card-body">
                  <h5
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
                      href={node.fields.slug}
                      target="_blank"
                    >
                      {title}
                    </Link>
                  </h5>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <p className="card-text mt-3">{node.frontmatter.intro}</p>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    href={node.fields.slug}
                    target="_blank"
                  >
                    View Guide
                  </Link>
                  <Link
                    className="btn btn-sm btn-light mt-3"
                    href={`${node.fields.slug}?print-pdf`}
                    target="_blank"
                  >
                    PDF View
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          cheat: { ne: true }
          infographic: { ne: true }
          reveal: { ne: true }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            short
            medium
            bgcolor
          }
        }
      }
    }
    cheatCollection: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          cheat: { in: true }
          infographic: { ne: true }
          reveal: { ne: true }
        }
      }
    ) {
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
    infographicCollection: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          infographic: { in: true }
          cheat: { ne: true }
          reveal: { ne: true }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            intro
          }
        }
      }
    }
    revealCollection: allMarkdownRemark(
      filter: { frontmatter: { reveal: { in: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            intro
          }
        }
      }
    }
    tagCollection: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
