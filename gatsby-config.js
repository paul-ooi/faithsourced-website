module.exports = {
  siteMetadata: {
    title: "Faith Sourced Software Foundation",
    author: "",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#2c393f',
        theme_color: '#2c393f',
        display: 'minimal-ui',
        icon: 'src/images/favicon-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
