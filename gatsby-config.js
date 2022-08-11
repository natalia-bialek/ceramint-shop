module.exports = {
  siteMetadata: {
    title: `Ceramint-Shop`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "69AT4C2ZxdZdBBFaYJGe-FlLQOi5cHGuERoADkjFx_s",
        spaceId: "qidbb5rdkrwa",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
  ],
};
