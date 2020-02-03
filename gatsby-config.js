/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv/config');

module.exports = {
  siteMetadata: {
    title: 'Peter Kuria',
    description:
      'Peter Kuria | Developing advanced front-end applications with JavaScript, React and Redux.',
    siteUrl: 'https://peterkuria.github.io',
    image:
      'https://peterkuria.github.io/static/avatar.jpg',
    social: {
      twitter: '@peterkuria2000',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@peterkuria2000',
        limit: 4,
      },
    },
    {
      resolve: 'gatsby-source-github-pinned',
      options: {
        apiToken: `${process.env.GH_TOKEN}`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Roboto'],
        },
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'peterkuria1',
      },
    },
  ],
};
