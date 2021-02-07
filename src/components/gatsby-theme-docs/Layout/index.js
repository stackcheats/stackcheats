/* @jsx jsx */
import { useRef, Fragment } from 'react'
import { jsx } from '@emotion/core'

import TableOfContents from '../Docs/TOC'
import { Container, Main, Children } from './styles'
import { rhythm } from '../../../utils/typography'

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  const contentRef = useRef(null)
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0

  return (
    <Fragment>
      <Container className="container my-5">
        <Main className="doc-container">
          <Children className="doc-children" ref={contentRef}>
            {title && (
              <h1
                className="stackcheats-header font-weight-normal"
                style={{
                  marginBottom: rhythm(1.5),
                  marginTop: rhythm(1.5),
                }}
              >
                {title}
              </h1>
            )}
            {children}
          </Children>
          <TableOfContents
            className="doc-toc"
            headings={headings}
            disableTOC={disableTOC}
            contentRef={contentRef}
          />
        </Main>
      </Container>
    </Fragment>
  )
}
