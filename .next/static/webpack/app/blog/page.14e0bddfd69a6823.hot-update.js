"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./data/siteMetadata.js":
/*!******************************!*\
  !*** ./data/siteMetadata.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/** @type {import(\"pliny/config\").PlinyConfig } */ \nconst siteMetadata = {\n    title: \"Next.js Starter Blog\",\n    author: \"Tails Azimuth\",\n    headerTitle: \"murramge\",\n    description: \"A blog created with Next.js and Tailwind.css\",\n    language: \"en-us\",\n    theme: \"system\",\n    siteUrl: \"https://tailwind-nextjs-starter-blog.vercel.app\",\n    siteRepo: \"https://github.com/timlrx/tailwind-nextjs-starter-blog\",\n    siteLogo: \"/static/images/logo.png\",\n    socialBanner: \"/static/images/twitter-card.png\",\n    mastodon: \"https://mastodon.social/@mastodonuser\",\n    email: \"address@yoursite.com\",\n    github: \"https://github.com\",\n    x: \"https://twitter.com/x\",\n    // twitter: 'https://twitter.com/Twitter',\n    facebook: \"https://facebook.com\",\n    youtube: \"https://youtube.com\",\n    linkedin: \"https://www.linkedin.com\",\n    threads: \"https://www.threads.net\",\n    instagram: \"https://www.instagram.com\",\n    locale: \"en-US\",\n    analytics: {\n        // If you want to use an analytics provider you have to add it to the\n        // content security policy in the `next.config.js` file.\n        // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.\n        umamiAnalytics: {\n            // We use an env variable for this site to avoid other users cloning our analytics ID\n            umamiWebsiteId: process.env.NEXT_UMAMI_ID\n        }\n    },\n    newsletter: {\n        // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus\n        // Please add your .env file and modify it according to your selection\n        provider: \"buttondown\"\n    },\n    comments: {\n        // If you want to use an analytics provider you have to add it to the\n        // content security policy in the `next.config.js` file.\n        // Select a provider and use the environment variables associated to it\n        // https://vercel.com/docs/environment-variables\n        provider: \"giscus\",\n        giscusConfig: {\n            // Visit the link below, and follow the steps in the 'configuration' section\n            // https://giscus.app/\n            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,\n            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,\n            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,\n            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,\n            mapping: \"pathname\",\n            reactions: \"1\",\n            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable\n            metadata: \"0\",\n            // theme example: light, dark, dark_dimmed, dark_high_contrast\n            // transparent_dark, preferred_color_scheme, custom\n            theme: \"light\",\n            // theme when dark mode\n            darkTheme: \"transparent_dark\",\n            // If the theme option above is set to 'custom`\n            // please provide a link below to your custom theme css file.\n            // example: https://giscus.app/themes/custom_example.css\n            themeURL: \"\",\n            // This corresponds to the `data-lang=\"en\"` in giscus's configurations\n            lang: \"en\"\n        }\n    },\n    search: {\n        provider: \"kbar\",\n        kbarConfig: {\n            searchDocumentsPath: \"search.json\"\n        }\n    }\n};\nmodule.exports = siteMetadata;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvc2l0ZU1ldGFkYXRhLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxnREFBZ0Q7QUFDaEQsTUFBTUEsZUFBZTtJQUNuQkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLGFBQWE7SUFDYkMsYUFBYTtJQUNiQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxHQUFHO0lBQ0gsMENBQTBDO0lBQzFDQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsUUFBUTtJQUNSQyxXQUFXO1FBQ1QscUVBQXFFO1FBQ3JFLHdEQUF3RDtRQUN4RCw0RUFBNEU7UUFDNUVDLGdCQUFnQjtZQUNkLHFGQUFxRjtZQUNyRkMsZ0JBQWdCQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGFBQWE7UUFJM0M7SUFXRjtJQUNBQyxZQUFZO1FBQ1YsMkVBQTJFO1FBQzNFLHNFQUFzRTtRQUN0RUMsVUFBVTtJQUNaO0lBQ0FDLFVBQVU7UUFDUixxRUFBcUU7UUFDckUsd0RBQXdEO1FBQ3hELHVFQUF1RTtRQUN2RSxnREFBZ0Q7UUFDaERELFVBQVU7UUFDVkUsY0FBYztZQUNaLDRFQUE0RTtZQUM1RSxzQkFBc0I7WUFDdEJDLE1BQU1QLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ08sdUJBQXVCO1lBQ3pDQyxjQUFjVCxPQUFPQSxDQUFDQyxHQUFHLENBQUNTLGdDQUFnQztZQUMxREMsVUFBVVgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDVywyQkFBMkI7WUFDakRDLFlBQVliLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ2EsOEJBQThCO1lBQ3REQyxTQUFTO1lBQ1RDLFdBQVc7WUFDWCx1RkFBdUY7WUFDdkZDLFVBQVU7WUFDViw4REFBOEQ7WUFDOUQsbURBQW1EO1lBQ25EbkMsT0FBTztZQUNQLHVCQUF1QjtZQUN2Qm9DLFdBQVc7WUFDWCwrQ0FBK0M7WUFDL0MsNkRBQTZEO1lBQzdELHdEQUF3RDtZQUN4REMsVUFBVTtZQUNWLHNFQUFzRTtZQUN0RUMsTUFBTTtRQUNSO0lBQ0Y7SUFDQUMsUUFBUTtRQUNOakIsVUFBVTtRQUNWa0IsWUFBWTtZQUNWQyxxQkFBcUI7UUFDdkI7SUFTRjtBQUNGO0FBRUFDLE9BQU9DLE9BQU8sR0FBR2pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvc2l0ZU1ldGFkYXRhLmpzPzczNWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlIHtpbXBvcnQoXCJwbGlueS9jb25maWdcIikuUGxpbnlDb25maWcgfSAqL1xuY29uc3Qgc2l0ZU1ldGFkYXRhID0ge1xuICB0aXRsZTogJ05leHQuanMgU3RhcnRlciBCbG9nJyxcbiAgYXV0aG9yOiAnVGFpbHMgQXppbXV0aCcsXG4gIGhlYWRlclRpdGxlOiAnbXVycmFtZ2UnLFxuICBkZXNjcmlwdGlvbjogJ0EgYmxvZyBjcmVhdGVkIHdpdGggTmV4dC5qcyBhbmQgVGFpbHdpbmQuY3NzJyxcbiAgbGFuZ3VhZ2U6ICdlbi11cycsXG4gIHRoZW1lOiAnc3lzdGVtJywgLy8gc3lzdGVtLCBkYXJrIG9yIGxpZ2h0XG4gIHNpdGVVcmw6ICdodHRwczovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cudmVyY2VsLmFwcCcsXG4gIHNpdGVSZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWxyeC90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nJyxcbiAgc2l0ZUxvZ286ICcvc3RhdGljL2ltYWdlcy9sb2dvLnBuZycsXG4gIHNvY2lhbEJhbm5lcjogJy9zdGF0aWMvaW1hZ2VzL3R3aXR0ZXItY2FyZC5wbmcnLFxuICBtYXN0b2RvbjogJ2h0dHBzOi8vbWFzdG9kb24uc29jaWFsL0BtYXN0b2RvbnVzZXInLFxuICBlbWFpbDogJ2FkZHJlc3NAeW91cnNpdGUuY29tJyxcbiAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tJyxcbiAgeDogJ2h0dHBzOi8vdHdpdHRlci5jb20veCcsXG4gIC8vIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tL1R3aXR0ZXInLFxuICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcbiAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20nLFxuICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbScsXG4gIHRocmVhZHM6ICdodHRwczovL3d3dy50aHJlYWRzLm5ldCcsXG4gIGluc3RhZ3JhbTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20nLFxuICBsb2NhbGU6ICdlbi1VUycsXG4gIGFuYWx5dGljczoge1xuICAgIC8vIElmIHlvdSB3YW50IHRvIHVzZSBhbiBhbmFseXRpY3MgcHJvdmlkZXIgeW91IGhhdmUgdG8gYWRkIGl0IHRvIHRoZVxuICAgIC8vIGNvbnRlbnQgc2VjdXJpdHkgcG9saWN5IGluIHRoZSBgbmV4dC5jb25maWcuanNgIGZpbGUuXG4gICAgLy8gc3VwcG9ydHMgUGxhdXNpYmxlLCBTaW1wbGUgQW5hbHl0aWNzLCBVbWFtaSwgUG9zdGhvZyBvciBHb29nbGUgQW5hbHl0aWNzLlxuICAgIHVtYW1pQW5hbHl0aWNzOiB7XG4gICAgICAvLyBXZSB1c2UgYW4gZW52IHZhcmlhYmxlIGZvciB0aGlzIHNpdGUgdG8gYXZvaWQgb3RoZXIgdXNlcnMgY2xvbmluZyBvdXIgYW5hbHl0aWNzIElEXG4gICAgICB1bWFtaVdlYnNpdGVJZDogcHJvY2Vzcy5lbnYuTkVYVF9VTUFNSV9JRCwgLy8gZS5nLiAxMjNlNDU2Ny1lODliLTEyZDMtYTQ1Ni00MjY2MTQxNzQwMDBcbiAgICAgIC8vIFlvdSBtYXkgYWxzbyBuZWVkIHRvIG92ZXJ3cml0ZSB0aGUgc2NyaXB0IGlmIHlvdSdyZSBzdG9yaW5nIGRhdGEgaW4gdGhlIFVTIC0gZXg6XG4gICAgICAvLyBzcmM6ICdodHRwczovL3VzLnVtYW1pLmlzL3NjcmlwdC5qcydcbiAgICAgIC8vIFJlbWVtYmVyIHRvIGFkZCAndXMudW1hbWkuaXMnIGluIGBuZXh0LmNvbmZpZy5qc2AgYXMgYSBwZXJtaXR0ZWQgZG9tYWluIGZvciB0aGUgQ1NQXG4gICAgfSxcbiAgICAvLyBwbGF1c2libGVBbmFseXRpY3M6IHtcbiAgICAvLyAgIHBsYXVzaWJsZURhdGFEb21haW46ICcnLCAvLyBlLmcuIHRhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cudmVyY2VsLmFwcFxuICAgIC8vIH0sXG4gICAgLy8gc2ltcGxlQW5hbHl0aWNzOiB7fSxcbiAgICAvLyBwb3N0aG9nQW5hbHl0aWNzOiB7XG4gICAgLy8gICBwb3N0aG9nUHJvamVjdEFwaUtleTogJycsIC8vIGUuZy4gMTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDAwXG4gICAgLy8gfSxcbiAgICAvLyBnb29nbGVBbmFseXRpY3M6IHtcbiAgICAvLyAgIGdvb2dsZUFuYWx5dGljc0lkOiAnJywgLy8gZS5nLiBHLVhYWFhYWFhcbiAgICAvLyB9LFxuICB9LFxuICBuZXdzbGV0dGVyOiB7XG4gICAgLy8gc3VwcG9ydHMgbWFpbGNoaW1wLCBidXR0b25kb3duLCBjb252ZXJ0a2l0LCBrbGF2aXlvLCByZXZ1ZSwgZW1haWxvY3RvcHVzXG4gICAgLy8gUGxlYXNlIGFkZCB5b3VyIC5lbnYgZmlsZSBhbmQgbW9kaWZ5IGl0IGFjY29yZGluZyB0byB5b3VyIHNlbGVjdGlvblxuICAgIHByb3ZpZGVyOiAnYnV0dG9uZG93bicsXG4gIH0sXG4gIGNvbW1lbnRzOiB7XG4gICAgLy8gSWYgeW91IHdhbnQgdG8gdXNlIGFuIGFuYWx5dGljcyBwcm92aWRlciB5b3UgaGF2ZSB0byBhZGQgaXQgdG8gdGhlXG4gICAgLy8gY29udGVudCBzZWN1cml0eSBwb2xpY3kgaW4gdGhlIGBuZXh0LmNvbmZpZy5qc2AgZmlsZS5cbiAgICAvLyBTZWxlY3QgYSBwcm92aWRlciBhbmQgdXNlIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXNzb2NpYXRlZCB0byBpdFxuICAgIC8vIGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2Vudmlyb25tZW50LXZhcmlhYmxlc1xuICAgIHByb3ZpZGVyOiAnZ2lzY3VzJywgLy8gc3VwcG9ydGVkIHByb3ZpZGVyczogZ2lzY3VzLCB1dHRlcmFuY2VzLCBkaXNxdXNcbiAgICBnaXNjdXNDb25maWc6IHtcbiAgICAgIC8vIFZpc2l0IHRoZSBsaW5rIGJlbG93LCBhbmQgZm9sbG93IHRoZSBzdGVwcyBpbiB0aGUgJ2NvbmZpZ3VyYXRpb24nIHNlY3Rpb25cbiAgICAgIC8vIGh0dHBzOi8vZ2lzY3VzLmFwcC9cbiAgICAgIHJlcG86IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dJU0NVU19SRVBPLFxuICAgICAgcmVwb3NpdG9yeUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfUkVQT1NJVE9SWV9JRCxcbiAgICAgIGNhdGVnb3J5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfQ0FURUdPUlksXG4gICAgICBjYXRlZ29yeUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfQ0FURUdPUllfSUQsXG4gICAgICBtYXBwaW5nOiAncGF0aG5hbWUnLCAvLyBzdXBwb3J0ZWQgb3B0aW9uczogcGF0aG5hbWUsIHVybCwgdGl0bGVcbiAgICAgIHJlYWN0aW9uczogJzEnLCAvLyBFbW9qaSByZWFjdGlvbnM6IDEgPSBlbmFibGUgLyAwID0gZGlzYWJsZVxuICAgICAgLy8gU2VuZCBkaXNjdXNzaW9uIG1ldGFkYXRhIHBlcmlvZGljYWxseSB0byB0aGUgcGFyZW50IHdpbmRvdzogMSA9IGVuYWJsZSAvIDAgPSBkaXNhYmxlXG4gICAgICBtZXRhZGF0YTogJzAnLFxuICAgICAgLy8gdGhlbWUgZXhhbXBsZTogbGlnaHQsIGRhcmssIGRhcmtfZGltbWVkLCBkYXJrX2hpZ2hfY29udHJhc3RcbiAgICAgIC8vIHRyYW5zcGFyZW50X2RhcmssIHByZWZlcnJlZF9jb2xvcl9zY2hlbWUsIGN1c3RvbVxuICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAvLyB0aGVtZSB3aGVuIGRhcmsgbW9kZVxuICAgICAgZGFya1RoZW1lOiAndHJhbnNwYXJlbnRfZGFyaycsXG4gICAgICAvLyBJZiB0aGUgdGhlbWUgb3B0aW9uIGFib3ZlIGlzIHNldCB0byAnY3VzdG9tYFxuICAgICAgLy8gcGxlYXNlIHByb3ZpZGUgYSBsaW5rIGJlbG93IHRvIHlvdXIgY3VzdG9tIHRoZW1lIGNzcyBmaWxlLlxuICAgICAgLy8gZXhhbXBsZTogaHR0cHM6Ly9naXNjdXMuYXBwL3RoZW1lcy9jdXN0b21fZXhhbXBsZS5jc3NcbiAgICAgIHRoZW1lVVJMOiAnJyxcbiAgICAgIC8vIFRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIGBkYXRhLWxhbmc9XCJlblwiYCBpbiBnaXNjdXMncyBjb25maWd1cmF0aW9uc1xuICAgICAgbGFuZzogJ2VuJyxcbiAgICB9LFxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBwcm92aWRlcjogJ2tiYXInLCAvLyBrYmFyIG9yIGFsZ29saWFcbiAgICBrYmFyQ29uZmlnOiB7XG4gICAgICBzZWFyY2hEb2N1bWVudHNQYXRoOiAnc2VhcmNoLmpzb24nLCAvLyBwYXRoIHRvIGxvYWQgZG9jdW1lbnRzIHRvIHNlYXJjaFxuICAgIH0sXG4gICAgLy8gcHJvdmlkZXI6ICdhbGdvbGlhJyxcbiAgICAvLyBhbGdvbGlhQ29uZmlnOiB7XG4gICAgLy8gICAvLyBUaGUgYXBwbGljYXRpb24gSUQgcHJvdmlkZWQgYnkgQWxnb2xpYVxuICAgIC8vICAgYXBwSWQ6ICdSMklZRjdFVEg3JyxcbiAgICAvLyAgIC8vIFB1YmxpYyBBUEkga2V5OiBpdCBpcyBzYWZlIHRvIGNvbW1pdCBpdFxuICAgIC8vICAgYXBpS2V5OiAnNTk5Y2VjMzFiYWZmYTQ4NjhjYWU0ZTc5ZjE4MDcyOWInLFxuICAgIC8vICAgaW5kZXhOYW1lOiAnZG9jc2VhcmNoJyxcbiAgICAvLyB9LFxuICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpdGVNZXRhZGF0YVxuIl0sIm5hbWVzIjpbInNpdGVNZXRhZGF0YSIsInRpdGxlIiwiYXV0aG9yIiwiaGVhZGVyVGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGhlbWUiLCJzaXRlVXJsIiwic2l0ZVJlcG8iLCJzaXRlTG9nbyIsInNvY2lhbEJhbm5lciIsIm1hc3RvZG9uIiwiZW1haWwiLCJnaXRodWIiLCJ4IiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwibGlua2VkaW4iLCJ0aHJlYWRzIiwiaW5zdGFncmFtIiwibG9jYWxlIiwiYW5hbHl0aWNzIiwidW1hbWlBbmFseXRpY3MiLCJ1bWFtaVdlYnNpdGVJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1VNQU1JX0lEIiwibmV3c2xldHRlciIsInByb3ZpZGVyIiwiY29tbWVudHMiLCJnaXNjdXNDb25maWciLCJyZXBvIiwiTkVYVF9QVUJMSUNfR0lTQ1VTX1JFUE8iLCJyZXBvc2l0b3J5SWQiLCJORVhUX1BVQkxJQ19HSVNDVVNfUkVQT1NJVE9SWV9JRCIsImNhdGVnb3J5IiwiTkVYVF9QVUJMSUNfR0lTQ1VTX0NBVEVHT1JZIiwiY2F0ZWdvcnlJZCIsIk5FWFRfUFVCTElDX0dJU0NVU19DQVRFR09SWV9JRCIsIm1hcHBpbmciLCJyZWFjdGlvbnMiLCJtZXRhZGF0YSIsImRhcmtUaGVtZSIsInRoZW1lVVJMIiwibGFuZyIsInNlYXJjaCIsImtiYXJDb25maWciLCJzZWFyY2hEb2N1bWVudHNQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/siteMetadata.js\n"));

/***/ })

});