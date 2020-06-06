import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import Tag from '../components/Tag'
import CodeWave from '../waves/CodeWave'

const shortcodes = {
  CodeWave,
}

class CheatPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.seo}
        />
        <div className="content-container my-5">
          <h1>{post.frontmatter.title}</h1>
          <h2 className="my-0 font-weight-normal">{post.frontmatter.intro}</h2>
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
          </div>
          <Tag tags={post.frontmatter.tags} />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          <hr className="mt-5" />
        </div>
      </Layout>
    )
  }
}

export default CheatPostTemplate

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
  }
`
