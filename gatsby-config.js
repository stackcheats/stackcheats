require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: `StackCheats`,
		author: `Athiththan Kathirgamasegaran`,
		description: `A Personal Blog Platform of Athiththan Kathirgamasegaran`,
		siteUrl: `https://stackcheats.github.io/`,
		social: {
			twitter: `athiththan11`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/stacksheets/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/stacksheets/content/assets`,
				name: `assets`,
			},
		},
		// {
		// 	resolve: "gatsby-plugin-page-creator",
		// 	options: {
		// 		path: `${__dirname}/stacksheets/content/blog`,
		// 	},
		// },
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: ['.mdx', '.md'],
				// a workaround to solve mdx-remark plugin compat issue
				// https://github.com/gatsbyjs/gatsby/issues/15486
				defaultLayouts: {
					posts: require.resolve("./src/components/Layout.js"),
				},
				plugins: [`gatsby-remark-images`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							offsetY: `200`,
							icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: `header-permlink`,
							maintainCase: true,
							removeAccents: true,
							isIconAfterHeader: false,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
					},
					{
						resolve: `gatsby-remark-smartypants`,
					},
					{
						resolve: `gatsby-remark-embed-gist`,
						options: {
							username: 'athiththan11',
							includeDefaultCss: false
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		// `gatsby-theme-waves`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map((edge) => {
								return Object.assign(
									{},
									edge.node.frontmatter,
									{
										description: edge.node.excerpt,
										data: edge.node.frontmatter.date,
										url:
											site.siteMetadata.siteUrl +
											edge.node.fields.slug,
										guid:
											site.siteMetadata.siteUrl +
											edge.node.fields.slug,
										custom_elements: [
											{
												'content:encoded':
													edge.node.html,
											},
										],
									}
								)
							})
						},

						/* if you want to filter for only published posts, you can do
						 * something like this:
						 * filter: { frontmatter: { published: { ne: false } } }
						 * just make sure to add a published frontmatter field to all posts,
						 * otherwise gatsby will complain
						 **/
						query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }
            `,
						output: '/rss.xml',
						title: 'Gatsby RSS feed',
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `StackCheats`,
				short_name: `StackCheats`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/stack.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
