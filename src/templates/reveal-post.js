import React from 'react'
import { withPrefix, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function RevealPostTemplate({ data, location }) {
  const reveal = data.markdownRemark

  return (
    <div style={{ height: 'inherit' }}>
      <SEO
        title={reveal.frontmatter.title}
        description={reveal.frontmatter.seo}
      />
      <div style={{ height: 'inherit' }}>
        <Helmet>
          <script src={withPrefix('reveal-activate.js')} />
        </Helmet>

        <div className="reveal my-3" style={{ height: 'inherit' }}>
          <div
            className="slides"
            dangerouslySetInnerHTML={{
              __html: reveal.html,
            }}
          ></div>
        </div>
      </div>
    </div>
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
        title
        date(formatString: "MMMM DD, YYYY")
        intro
        tags
        seo
      }
      internal {
        content
      }
      html
      rawMarkdownBody
    }
  }
`
