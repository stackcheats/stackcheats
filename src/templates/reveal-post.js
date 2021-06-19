import React from 'react'
import { Link, withPrefix, graphql } from 'gatsby'

import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class RevealPostTemplate extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = withPrefix('reveal-activate.js')
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    const reveal = this.props.data.markdownRemark
    return (
      <div style={{ height: 'inherit' }}>
        <SEO
          title={reveal.frontmatter.title}
          description={reveal.frontmatter.seo}
        />
        <div style={{ height: 'inherit' }}>
          <div className="reveal-tags">
            <div>
              <Link
                key="stackcheats"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                href={`/`}
                target="_blank"
              >
                <img
                  className="mb-0 mr-3"
                  src={withPrefix('stack.png')}
                  style={{ width: 32, height: 32, borderRadius: 40 }}
                />
              </Link>
              <a href="https://github.com/athiththan11">
                <img
                  className="mb-0 mr-3"
                  src="https://avatars3.githubusercontent.com/u/29927177?s=460&amp;v=4"
                  style={{ width: 32, height: 32, borderRadius: 40 }}
                />
              </a>
              {reveal.frontmatter.tags.map(tag => (
                <Link
                  key={tag}
                  className="badge badge-primary font-weight-normal"
                  to={`/tags/${tag}/`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ height: 'inherit' }}>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        intro
        tags
        seo
      }
      html
    }
  }
`
