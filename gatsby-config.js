const root = require('path').resolve.bind(null, __dirname)

const stackcheats_path = root('stackcheats/stack')

module.exports = {
    siteMetadata: {
        title: `stackcheats`,
        author: `Athiththan`,
        description: `stackcheats: where cheats get stacked`,
        sheetPath: stackcheats_path,
        siteUrl: `https://stackcheats.github.io`,
        social: {
            twitter: `athiththan11`
        }
    },
    plugins: [
        `gatsby-plugin-theme-ui`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${stackcheats_path}/sheets`,
				name: `blog`
			}
        },
        {
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${stackcheats_path}/cheats`,
				name: `cheatsheet`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${stackcheats_path}/assets`,
				name: `assets`
			}
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${stackcheats_path}/covers`,
                name: `covers`
            }
        },
        {
            resolve: `gatsby-mdx`,
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/Layout.js')
                }
            }
        },
		{
			resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-embed-gist`,
						options: {
							username: 'athiththan11',
							includeDefaultCss: false
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMaker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
                    },
                    {
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
                ]
			}
        },
		`gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-144714384-1`
			}
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `stackcheats.io`,
				short_name: `stackcheats`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `stackcheats/stack/assets/stackcheats-icon.png`
			}
		},
		// `gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
        }
	]
}
