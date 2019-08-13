const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Docz V2 Mui Bug',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz V2 Mui Bug',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug',
          templates:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/package.json',
          docz:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz',
          cache:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/.cache',
          app:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app',
          appPublic:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/public',
          appNodeModules:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules',
          appPackageJson:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/package.json',
          appYarnLock:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/gatsby-config.js',
          gatsbyBrowser:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/gatsby-browser.js',
          gatsbyNode:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/gatsby-node.js',
          gatsbySSR:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/gatsby-ssr.js',
          importsJs:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app/imports.js',
          rootJs:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app/root.jsx',
          indexJs:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app/index.jsx',
          indexHtml:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app/index.html',
          db:
            '/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
