const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-docs-gee-mdx": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/docs/gee.mdx"))),
  "component---src-docs-index-mdx": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/docs/index.mdx"))),
  "component---src-docs-home-mdx": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/docs/home.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/src/pages/page-2.js")))
}

