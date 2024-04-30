import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JSON-UI Helper",
  description: "UI Compiler for the Bedrock Edition of Minecraft",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/docs/get-started" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Get Started", link: "/docs/get-started" }
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Div", link: "/docs/reference/div" },
          { text: "Layout", link: "/docs/reference/layout" },
          { text: "Grid", link: "/docs/reference/grid" },
          { text: "Stacker", link: "/docs/reference/stacker" },
          { text: "Label", link: "/docs/reference/label" },
          { text: "Image", link: "/docs/reference/image" },
          { text: "Render", link: "/docs/reference/render" },
          { text: "Enums", link: "/docs/reference/enumerations" },
          { text: "Functions", link: "/docs/reference/functions" },
        ],
      },
    ],
    search: {
      provider: "local"
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
