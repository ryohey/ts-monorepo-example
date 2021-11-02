const path = require("path")

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.ts"),
  output: {
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
  },
}
