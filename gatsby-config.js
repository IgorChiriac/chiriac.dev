const config = {
  pathPrefix: "/",

  siteTitle: "Igor Chiriac - Personal Website",
  siteTitleAlt: "Igor Chiriac",
  siteTitleShort: "chiriac",
  siteHeadline: "",
  siteUrl: "https://chiriac.dev",
  siteLanguage: "en",
  siteLogo: "/logo.png",
  siteDescription: "",
  author: "IgorChiriac",

  userTwitter: "@Igor_Chiriac", // Twitter Username
  ogSiteName: "cara", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: "#e07628",
  backgroundColor: "#a0d8f1"
};

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    },
    /* Must be placed at the end */
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
