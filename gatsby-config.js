module.exports = {
  siteMetadata: {
    title: "Faith Sourced Software Foundation",
    author: "",
    description: "Sofware as a Service"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Faith Sourced Software Foundation',
        short_name: 'Faith Sourced',
        start_url: '/',
        background_color: '#2c393f',
        theme_color: '#2c393f',
        display: 'standalone',
        icon: 'src/images/favicon-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
