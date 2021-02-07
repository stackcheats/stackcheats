import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../Layout'

export default function Docs({ mdx, pageContext }) {
  const { title, disableTableOfContents } = mdx.frontmatter
  const { headings, body } = mdx

  return (
    <>
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </>
  )
}
