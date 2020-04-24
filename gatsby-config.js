module.exports = {
  siteMetadata: {
    title: 'Sandy Wyper - Web Developer',
    author: 'Sandy',
    description: 'Full stack developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sandy Wyper - Web Developer',
        short_name: 'starter',
        start_url: '/',
        background_color: '#636363',
        theme_color: '#636363',
        display: 'minimal-ui',
        icon: 'src/images/SW_Logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
