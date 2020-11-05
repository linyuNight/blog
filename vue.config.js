module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 新版本sass-loader， 将data改成prependData进行配置
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  },
  // devServer: {
  //   port: 3333,
  //   open: true
  // },

  devServer: {
    port: 3333
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3000/'
    //   },
    //   '/test': {
    //     target: 'http://127.0.0.1:3000/'
    //   }
    // }
  },
  lintOnSave: false
}

// "use strict"
// const path = require("path")

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// const name = "vue Admin Temolate"

// module.exports = {
//   publicPath: './',
//   outputDir: 'dist',
//   assetsDir: 'static',
//   lintOnSave: false,

//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: '@import "@/assets/scss/_variable.scss";'
//       }
//     }
//   },
//   productionSourceMap: false,

//   devServer: {
//     port: 3333
//     // prot: 8080,
//     // proxy: {
//     //   "/sys": {
//     //     target: 'http://cdis.dev.pab.com.cn'
//     //   },
//     //   "/main": {
//     //     target: 'http://cdis.dev.pab.com.cn'
//     //   },
//     //   "/rpt": {
//     //     target: 'http://cdis.dev.pab.com.cn'
//     //   },
//     // }
//   },
//   configureWebpack: {
//     name: name,
//     resolve: {
//       alias: {
//         "@": resolve("src")
//       }
//     }
//   },
//   chainWebpack(config) {
//     config.plugins.delete("preload");
//     config.plugins.delete("prefetch");

//     config.module.rule("svg").exclude.add(resolve("src/icons")).end()
//     config.module.rule("icons").test(/\.svg$/).include.add(resolve("src/icons")).end().use("svg-sprite-loader").loader("svg-sprite-loader").options({ symbolID: 'icon-[name]' }).end()
//     config.module.rule("vue").use("vue-loader").tap(options => {
//       options.compilerOptions.preserveWhitespace = true
//       return options
//     }).end();

//     config.when(process.env.NODE_ENV === "development", config => config.devtool("source-map"))

//     config.when(process.env.NODE_ENV !== "development", config => {
//       config.plugin("ScriptExtHtmlWebpackPlugin").after("html").use("script-ext-html-webpack-plugin", [{
//         inline: /runtime\..*\.js$/
//       }]).end()

//       config.optimization.splitChunks({
//         minSize: 30000,
//         maxSize: 500000,
//         chunks: "all",
//         cacheGroups: {
//           libs: {
//             name: "chunk-libs",
//             test: /[\\/]node_modules[\\/]/,
//             priority: 10,
//             chunks: "initial"
//           },
//           elementUI: {
//             name: "chunk-elementUI",
//             priority: 20,
//             test: /[\\/]node_modules[\\/]_?element-ui(.*)/
//           },
//           commons: {
//             name: "chunk-commons",
//             test: resolve("src/components"),
//             minChunks: 3,
//             priority: 5,
//             reuseExistingChunk: true
//           }
//         }
//       })
//       config.optimization.runtimeChunk("single")
//     })

//   }
// }