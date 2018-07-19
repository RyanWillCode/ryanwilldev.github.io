module.exports = {
  siteMetadata: {
    title: 'RyanWillDev | Software Developer',
    description:
      'Software Developer in the Nashville area with a passion for learning, teaching, and creating custom software solutions.',
    keywords:
      'nashville, tennessee, software, development, developer, website, custom, blog, web developer, software developer, dickson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              backgroundColor: '#bcbcbc',
              wrapperStyle: 'margin: 0 auto 1rem;',
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-120539917-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
