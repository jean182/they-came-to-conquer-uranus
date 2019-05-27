module.exports = {
  siteMetadata: {
    title: `They Came To Conquer Uranus`,
    description: `Let's talk about the space`,
    author: `Jean Aguilar`,
    siteUrl: `https://theycametoconqueruranus.com`,
    social: {
      twitter: `jeanm182`,
      instagram: `jeanm182`,
      github: `jean182`,
      linkedIn: `jean182`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#18cafc`,
        theme_color: `#18cafc`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
