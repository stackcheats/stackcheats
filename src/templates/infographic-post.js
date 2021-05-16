import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import Tag from '../components/Tag'
import InfoGraphic from '../graphics/InfoGraphic'
import { Eye } from 'react-feather'

const shortcodes = {
  InfoGraphic,
}

class InfoGraphicPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const views = this.props.data.sheetViews.count

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.seo}
        />
        <div className="content-container">
          <h2>{post.frontmatter.title}</h2>
          <h3 className="my-0 font-weight-normal">{post.frontmatter.intro}</h3>
          <p
            className="text-muted"
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div className="my-4">
            <a href="https://github.com/athiththan11">
              <img
                className="mb-0"
                src="https://avatars3.githubusercontent.com/u/29927177?s=460&amp;v=4"
                style={{ width: 32, height: 32, borderRadius: 40 }}
              />
            </a>
            <span className="px-4">|</span>
            <span className="btn btn-sm ga-pg-views text-muted">
              <Eye className="pr-1" />
              &nbsp;{views} views
            </span>
          </div>
          <Tag tags={post.frontmatter.tags} />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Layout>
    )
  }
}

export default InfoGraphicPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        intro
        tags
      }
      body
    }
    sheetViews(slug: { eq: $slug }) {
      count
    }
  }
`
