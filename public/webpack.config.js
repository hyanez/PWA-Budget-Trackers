const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.bundle.js",
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      description:
        "A fast and easy way to track their money, and allowing them to access that information anytime with offline functionality",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("icons"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = config;
