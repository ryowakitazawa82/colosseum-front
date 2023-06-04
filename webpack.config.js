const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
  publicPath: "/",
  outputDir: "distm",
  devServer: {
    port: 5000,
    proxy: {
      "^/v1/": {
        target: "https://aaa",
        secure: false,
        logLevel: "debug",
        // pathRewrite: { "^/v1/": "/manager/v1/" }
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.js", // 最初に実行されるファイル名
      title: "管理サイト", // タイトルの設定これが <title>タグになる
    },
  },
  configureWebpack: {
    // ビルドのファイルサイズ警告の閾値を変更
    // ビルドサイズが 3MB 超えたあたりで、日本の一般的な 4G 環境では使い物にならなくなる
    // 150k best, 350k現実, 1.5Mは超えないように
    performance: {
      maxEntrypointSize: 350000,
      maxAssetSize: 350000,
    },
    plugins: [
      new MomentLocalesPlugin({ localesToKeep: ["ja"] }), //必要な言語だけをバインドするようにする
      new DuplicatePackageCheckerPlugin(),
      new LodashModuleReplacementPlugin(),
    ],
  },
};
