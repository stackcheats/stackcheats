import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import Tag from '../components/Tag'
import InfoGraphic from '../graphics/InfoGraphic'

const shortcodes = {
  InfoGraphic,
}

class InfoGraphicPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

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
  }
`