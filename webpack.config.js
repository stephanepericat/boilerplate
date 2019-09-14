const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Boilerplate",
      template: "index.html"
    })
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "public")
  }
};
