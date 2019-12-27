/*eslint-env node */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `Nodeschool desconhecido`,
    description: `Esta é minha instância nodeschool falsa.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeSchool Campinas-`,
        short_name: `nodeschool`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.relative(
          __dirname,
          require.resolve(
            `gatsby-theme-nodeschool/src/images/nodeschool-logo.png`,
          ),
        ),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-theme-nodeschool`,
      options: {
        title: `NodeSchool Campinas`,
        description: `Website for NodeSchool Campinas.`,
        twitter: `@NodeSchoolYVR`,
        github: `nodeschool/campinas`,
        url: `https://halkeye.github.io/gatsby-theme-nodeschool/`,
        slack: ``,
        meetupGroup: `nodeschool-vancouver`,
        email: `nodeschoolcps@gmail.com`,
        mailchimpSubscribeUrl: `https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956`,
        credits: {
          logo: {
            name: `Kenneth Ormandy`,
            url: `https://kennethormandy.com/`,
          },
        },
      },
    },
  ],
};
