var plugins = [{
      plugin: require('/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-component"},{"resolve":"gatsby-remark-external-links","options":{"target":"_self","rel":"noopener noreferrer"}},{"resolve":"gatsby-remark-images","options":{"maxWidth":590}}],"remarkPlugins":[null,[null,{"type":"yaml","marker":"-"}],null],"rehypePlugins":[null,null],"defaultLayouts":{"default":"/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/gatsby-theme-docz/src/base/Layout.js"}},
    },{
      plugin: require('/Users/austincoose/iCloud Drive (Archive)/Documents/GitHub/docz-v2-mui-bug/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"docz-material-ui-example","short_name":"example","start_url":"/","background_color":"#00bab3","theme_color":"#00bab3","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
