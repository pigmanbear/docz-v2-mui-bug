# docz v2 Bug Report

This is a reproduction repo for [docz issue #979](https://github.com/pedronauck/docz/issues/979).

**Reproduction steps (copied from #979):**

1. Clone this repo
2. Install dependencies (I'm running `yarn`)
3. Run the dev server (I'm running `yarn run dev`)
4. Wait for docz to download dependencies and start the dev server

In the docz console, no errors are reported, but the following error is displayed in the browser console and rendered on the page:

```
Uncaught TypeError: e is not a function
    at ./node_modules/compass-vertical-rhythm/dist/index.js.module.exports (index.js:1)
    at toTheme (index.esm.js:239)
    at Module.<anonymous> (index.js:1)
    at Module../node_modules/gatsby-theme-docz/src/theme/index.js (index.js:1)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Module.<anonymous> (index.js:1)
    at Module../node_modules/gatsby-theme-docz/src/index.js (index.js:1)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Module.<anonymous> (Layout.js:1)
    at Module../node_modules/gatsby-theme-docz/src/base/Layout.js (Layout.js:1)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Module.<anonymous> (bootstrap:790)
    at Module.../home.mdx (home.mdx:18)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Object.<anonymous> (sync-requires.js:4)
    at Object../.cache/sync-requires.js (sync-requires.js:4)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Module.<anonymous> (app.js:1)
    at Module../.cache/app.js (app.js:38)
    at __webpack_require__ (bootstrap:723)
    at fn (bootstrap:100)
    at Object.0 (404.js:1)
    at __webpack_require__ (bootstrap:723)
    at bootstrap:790
    at bootstrap:790
index.js:2177 hot update failed for module "./.cache/sync-requires.js". Last file processed: "./node_modules/gatsby-theme-docz/src/theme/index.js".
```

![chrome_23](https://user-images.githubusercontent.com/24602724/61889843-2ba45300-aed4-11e9-8fbe-a14fc11e1066.png)

**Expected behavior**

The server starts and displays the home page without any errors.
