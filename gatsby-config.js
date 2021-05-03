module.exports = {
  siteMetadata: {
    title: "Gatsby Test",
  },
  pathPrefix: "/CellProfilerAnalystForTheWeb",
  flags: {
    THE_FLAG: false
  },
  plugins: [
    // "gatsby-plugin-styled-components",
    // "gatsby-plugin-image",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
