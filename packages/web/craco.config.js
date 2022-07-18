const path = require("path");

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    babel: {
        plugins: [["react-native-web", { commonjs: true }]],
    },
  webpack: {
    configure: webpackConfig => {
      // ts-loader is required to reference external typescript projects/files (non-transpiled)
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      })

      return webpackConfig;
    },
    alias: {
        'react-native$': 'react-native-web',
      },
    plugins: {
      add: [
        // Inject the "__DEV__" global variable.
        new webpack.DefinePlugin({
          __DEV__: process.env.NODE_ENV !== 'production',
        }),
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
      remove: ["ManifestPlugin", "WorkboxWebpackPlugin", "WebpackManifestPlugin"]
    }
  }
};