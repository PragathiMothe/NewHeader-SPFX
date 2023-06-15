const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
   entry: ['@babel/polyfill',
     path.resolve(__dirname, './src/extensions/newHeader/NewHeaderApplicationCustomizer.ts')],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[Headercomponent].scss",
      chunkFilename: "[id].scss"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
//   output: {
//     filename: "top-navigation.js",
//     path: path.resolve(__dirname, "classic-dist"),
//     libraryTarget: "umd"
//   }
};
