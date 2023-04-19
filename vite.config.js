
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index2: resolve(__dirname, 'index2.html'),
        index3: resolve(__dirname, 'index3.html'),
        index4: resolve(__dirname, 'index4.html'),
        index5: resolve(__dirname, 'index5.html'),
        index6: resolve(__dirname, 'index6.html'),
        index7: resolve(__dirname, 'index7.html'),
        index8: resolve(__dirname, 'index8.html'),
        index9: resolve(__dirname, 'index11.html'),
      },
    },
  },
})