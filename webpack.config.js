const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const pkg = require("./package.json");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env = {}) => {
  const isProd = env.production;
  let corePlugins = [];
  if (isProd) {
    corePlugins = [new webpack.BannerPlugin(`${pkg.name} - ${pkg.version}`), new MinifyPlugin({},{})];
  }
  const index = "index.html";
  const indexDev = index;
  corePlugins.push(
    new HtmlWebpackPlugin({
      template: isProd? index : indexDev,
      inject: false,
    }),
  );
  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "cheap-module-eval-source-map",
    entry: {
      "grapesjs-echarts-presets": "./src",
      "grapesjs-echarts-presets.min": "./src",
    },
    output: {
      path: path.resolve(__dirname),
      filename: "dist/[name].js",
      chunkFilename: "dist/[name].bundle.js",
      library: pkg.name,
      libraryTarget: "umd",
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "svg-inline-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          include: /src/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.scss$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [...corePlugins, new VueLoaderPlugin()],
    externals: { grapesjs: "grapesjs" },
  };
};
