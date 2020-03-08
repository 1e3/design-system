module.exports = {
  siteMetadata: {
    title: `1e3 UI components documentation`,
    author: `Rafael Franco`,
    description: `1e3 UI components documentation`,
    siteUrl: `https://1e3.dev/ui`,
    social: {
      twitter: `rfoel`,
    },
  },
  plugins: [
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `docs`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
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
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `1e3 UI documentation`,
        short_name: `1e3 UI`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1e31e3`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
