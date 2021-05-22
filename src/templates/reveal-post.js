import React from 'react'
import { withPrefix, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { rhythm, scale } from '../utils/typography'

export default function RevealPostTemplate({ data, location }) {
  const slideMarkdown = data.markdownRemark

  return (
    <Layout
      location={location}
      title={data.site.siteMetadata.title}
      presentFooter={false}
    >
      <SEO
        title={slideMarkdown.frontmatter.title}
        description={slideMarkdown.frontmatter.seo}
      />
      <div className="container">
        <Helmet>
          <script src={withPrefix('reveal-activate.js')} />
        </Helmet>
        <div
          className="content-container"
          style={{
            height: '50vh',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <h1>{slideMarkdown.frontmatter.title}</h1>
          <p
            className="text-muted"
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {slideMarkdown.frontmatter.date}
          </p>
          <div className="reveal">
            <div
              className="slides"
              dangerouslySetInnerHTML={{
                __html: slideMarkdown.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        reveal
        title
        date
      }
      internal {
        content
      }
      html
      rawMarkdownBody
    }
  }
`
