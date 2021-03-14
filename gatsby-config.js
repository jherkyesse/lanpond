module.exports = {
  siteMetadata: {
    title: `Jherk Yesse`,
    name: `Jherk`,
    siteUrl: `https://github.com/jherkyesse`,
    description: 'Yesterday is better than today, today is better than tomorrow.',
    hero: {
      heading: 'Yesterday is better than today, today is better than tomorrow.',
      maxWidth: 820,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jherkyesse`,
      },
      {
        name: `github`,
        url: `https://github.com/jherkyesse`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jherkyesse`,
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
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
