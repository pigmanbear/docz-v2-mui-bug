const emoji = require("remark-emoji")


module.exports = {
  siteMetadata: {
    title: `Docz Material-UI`,
    description: `Showing Gatsby Component Shadowing.`,
    author: `Austin Coose`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`, {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "noopener noreferrer"
            }
          }, {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container
              // as this plugin uses this as the base for generating different widths of each
              // image.
              maxWidth: 590
            }
          }
        ]
      }
    }, {
      resolve: `gatsby-theme-docz`,
      options: {
        mdPlugins: [emoji]
      }
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `docz-material-ui-example`,
        short_name: `example`,
        start_url: `/`,
        background_color: `#00bab3`,
        theme_color: `#00bab3`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // `gatsby-plugin-offline`
  ]
}

//mdx