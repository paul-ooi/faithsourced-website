module.exports = {
  siteMetadata: {
    title: "Faith Sourced Software Foundation",
    author: "",
    description: "Faith Sourced is a community of software developers using their skills for Jesus. We call it Software as a Service where Christ is the center of all we are and do. Faith Sourced is our contribution to the cause of Christ, and His church. Faith Sourced is our chance to use our uniquely technical skills for purposes that are eternal, united under one banner: the gospel of Jesus Christ. The software we build is freely available to the body of Christ, for His glory.",
     keywords: "software,developer,code,open source,faith,christian,jesus,church,meetups,toronto,canada",
     thumbnail: "https://faithsourced.com/icons/icon-512x512.png",
     url: "https://faithsourced.com"
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
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
	{
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
        name: "blog",
      },
    },
  ],
}
