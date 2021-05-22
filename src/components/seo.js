import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  publishedDate,
  post,
  pathname,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaKeywords = data.site.siteMetadata.keywords
        const metaImage = data.site.siteMetadata.image
        const siteUrl = data.site.siteMetadata.siteUrl
        const twitterUsername = data.site.siteMetadata.social.twitter
        const siteTitle = data.site.siteMetadata.title
        const author = data.site.siteMetadata.author
        const buildTime = data.site.buildTime

        const schema = {
          '@context': 'http://schema.org',
          '@type': 'WebPage',
          url: siteUrl,
          headline: siteTitle,
          inLanguage: `en`,
          mainEntityOfPage: siteUrl,
          description: metaDescription,
          name: siteTitle,
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: author,
          },
          copyrightYear: '2021',
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Person',
            name: author,
          },
          datePublished: '2019-01-18T10:30:00+01:00',
          dateModified: buildTime,
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}${metaImage}`,
          },
        }

        let schemaPost = null
        if (post) {
          schemaPost = {
            '@context': 'http://schema.org',
            '@type': post,
            url: `${siteUrl}${pathname}`,
            headline: title,
            inLanguage: `en`,
            mainEntityOfPage: `${siteUrl}${pathname}`,
            description: description,
            name: title,
            author: {
              '@type': 'Person',
              name: author,
            },
            copyrightHolder: {
              '@type': 'Person',
              name: author,
            },
            copyrightYear: '2021',
            creator: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Person',
              name: author,
            },
            datePublished: publishedDate,
            image: {
              '@type': 'ImageObject',
              url: `${siteUrl}${metaImage}`,
            },
          }
        }

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title || siteTitle}
            titleTemplate={`%s | ${siteTitle}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title || siteTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: `${siteUrl}${metaImage}`,
              },
              {
                property: `og:url`,
                content: `${siteUrl}${pathname}`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: twitterUsername,
              },
              {
                name: `twitter:title`,
                content: title || siteTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: `${siteUrl}${metaImage}`,
              },
              {
                name: `keywords`,
                content:
                  keywords.length > 0
                    ? keywords.join(`, `).concat(`, `, metaKeywords)
                    : metaKeywords,
              },
            ].concat(meta)}
          >
            {!post && (
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            )}
            {post && (
              <script type="application/ld+json">
                {JSON.stringify(schemaPost)}
              </script>
            )}
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  pathname: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string,
  post: PropTypes.string,
  pathname: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        title
        siteUrl
        description
        author
        keywords
        image
        social {
          twitter
        }
      }
    }
  }
`
