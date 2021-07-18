// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "anti/pattern", // website title
              separator: "|", // default
              author: "mosia noor",
              background: require.resolve("./src/images/card.jpg"), // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: "#228B22", // defaults to white (#ffffff)
              titleFontSize: 96, // default
              subtitleFontSize: 60, // default
              fontStyle: "monospace", // default
              useFrontmatterSlug: false, // default, if true it will use the slug defined in the post frontmatter
            },
          },
        ],
      },
    },
  ],
};
