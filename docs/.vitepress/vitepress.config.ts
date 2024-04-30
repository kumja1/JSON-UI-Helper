import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JSON-UI Helper",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/get-started" },
    ],
    
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Get Started", link: "/docs/get-started" },
          { text: "API Examples", link: "/docs/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/TheoristMC/JSON-UI-Helper" },
    ],
  },
});
