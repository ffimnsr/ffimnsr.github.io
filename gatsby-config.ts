import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Portfolio by @ffimnsr`,
    siteUrl: `https://me.vastorigins.com`,
  },
  graphqlTypegen: false,
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/android-chrome-512x512.png",
        name: `The Portfolio by @ffimnsr`,
        short_name: `The Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
}

export default config
