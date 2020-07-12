module.exports = {
  presets: ["@babel/preset-env"], // @babel/preset-envを使うという設定
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"], // test時は、transform-es2015-modules-commonjsをかませる。
    },
  },
};
