const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  readingTime: true,
})
 
module.exports = {
  ...withNextra({
    images: { unoptimized: true },
  }),
  output: 'export',
  basePath: "/production-grade-dapps",
}
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
