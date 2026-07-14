import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RustCraft Lua Docs",
  description: "Modding docs for RustCraft.",
  base: '/Docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '中文文档', link: '/zh-cn/lua-modding-api' },
      { text: 'English', link: '/en/lua-modding-api' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Lua Modding API',
        items: [
          { text: '中文', link: '/zh-cn/lua-modding-api' },
          { text: 'English', link: '/en/lua-modding-api' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RustCraftMC/RustCraft' }
    ]
  }
})
