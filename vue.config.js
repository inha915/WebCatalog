// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            // 여기에서 사용할 PostCSS 플러그인 추가
            require("autoprefixer"),
            // 다른 플러그인이 필요하다면 여기에 추가
          ],
        },
      },
    },
  },
};
