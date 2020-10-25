module.exports = {
  siteMetadata: {
    title: `100 DAYS CSS`,
    description: ``,
    author: `Marino Kolarić`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `days`,
        path: `${__dirname}/src/components/days`,
        ignore: [`index.ts`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#453399`,
        theme_color: `#663119`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@const': 'src/const',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@state': 'src/state',
          '@style': 'src/style',
          '@types': 'src/types',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'tsx', 'ts'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,600`,
          `Montserrat\:500,600`,
          `Oswald\:700`,
          `Fira Sans Condensed\:400`,
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     url: 'https://rickandmortyapi.com/graphql/',
    //     typeName: 'RickAndMorty',
    //     fieldName: 'rickandmorty',
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
