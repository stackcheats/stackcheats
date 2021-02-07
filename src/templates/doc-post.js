import React from 'react'
import { graphql } from 'gatsby'

import Docs from '../components/gatsby-theme-docs/Docs'

export default function Docspage({ data: { mdx }, pageContext }) {
  return <Docs mdx={mdx} pageContext={pageContext} />
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        description
        disableTableOfContents
      }
      body
      headings {
        depth
        value
      }
    }
  }
`
