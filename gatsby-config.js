module.exports = {
  siteMetadata: {
    title: 'Snail Book Pals',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Snail Book Pals',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/sbp-icon.png',
      },
    },
  ],
};
