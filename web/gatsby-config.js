// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

// const siteMetadata = {
//   title: "Footy ZA",
//   titleTemplate: "%s · Football's home",
//   description: "Football blog.",
//   url: "https://footyza.netlify.app", // No trailing slash allowed!
//   image:
//     "https://cdn.sanity.io/images/3rw4tk2q/production/c277cc856aab9f6f5a878ac31c74ad8deb8d5e76-1350x759.jpg?rect=0,0,1349,759&w=1200&h=675&fit=crop&auto=format", // Path to your image you placed in the 'static' folder
//   twitterUsername: "@mosia_fpl",
// };

module.exports = {
  // siteMetadata: { ...siteMetadata },
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
  ],
};
