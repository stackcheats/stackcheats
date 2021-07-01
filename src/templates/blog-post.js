import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import Tag from '../components/Tag'
import Reference from '../components/Reference'

import { Medium } from '@icons-pack/react-simple-icons'
import { Eye } from 'react-feather'
// import Comments from '../components/comments/Comments'

const shortcodes = {
  Reference,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const views = 0;
    if (this.props.data.sheetViews && this.props.data.sheetViews.count) {
      views = this.props.data.sheetViews.count
    }
    // const comments = this.props.data.allStackCheatsComments.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.seo}
          keywords={post.frontmatter.tags}
          pathname={this.props.location.pathname}
          publishedDate={post.frontmatter.date}
          post="Blog"
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
            <a
              className="btn btn-sm ml-2 rounded"
              style={{
                width: 'max-content',
              }}
              href={post.frontmatter.medium}
            >
              <Medium size={28} />
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
          <hr className="mt-5" />
          {/* <Comments comments={comments} slug={this.props.location.pathname} /> */}
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
        seo
        medium
      }
      body
    }
    sheetViews(slug: { eq: $slug }) {
      count
    }
  }
`
