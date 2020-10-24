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
