module.exports = {
  siteMetadata: {
    title: `Valhalla`,
    name: `Written with love by Lance`,
    siteUrl: `https://valhalla.ink`,
    description: `留下些痕迹`,
    hero: {
      heading: `Welcome to my home, feel free to stop by`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/PoxleShu`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/r3aliti/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Valhalla by Shu`,
        short_name: `VAL`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
