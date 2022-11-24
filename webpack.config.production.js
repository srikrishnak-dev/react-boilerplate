const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = merge(BaseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "appBundle_Analyzer.html",
    }),
  ],
});
