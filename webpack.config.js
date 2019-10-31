const path = require("path");
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
  //设置生成预览页面的模板文件
  template: "./src/index.html",
  //设置生成的预览页面名称
  filename: "index.html"
});

module.exports = {
  mode: "development",
  // 设置入口文件路径
  entry: path.join(__dirname, "./src/index.js"),
  // 设置出口文件
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist")
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {test: /\.css$/,use: ["style-loader", "css-loader","postcss-loader"]},
      {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
      {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16941'}
    ]
  }
};
