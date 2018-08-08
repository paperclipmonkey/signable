module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        }
      ]
    }
  },
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://api.signable.co.uk',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
