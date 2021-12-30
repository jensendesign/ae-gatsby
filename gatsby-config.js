/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/ae-gatsby",
  siteMetadata: {
    title: `ActiveEye Document Starter`,
    description: `Setting up a Gatsby site for the ActiveEye Document Site`,
    author: `https://github.com/jensendesign`,
    siteUrl: `https://github.com/jensendesign`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
