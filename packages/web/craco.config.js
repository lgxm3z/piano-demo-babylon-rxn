/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require('path')

const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
  getLoader,
  loaderByName,
  getPlugin,
  pluginByName
} = require("@craco/craco");

const {
  getWebpackTools
} = require("react-native-monorepo-tools");

const TerserPlugin = require('terser-webpack-plugin');

const monorepoWebpackTools = getWebpackTools();

module.exports = function ({
  env
}) {
  return {
    babel: {
        plugins: [["react-native-web", { commonjs: true }]],
    },
    webpack: {
      configure: (webpackConfig) => {

        // Allow importing from external workspaces.
        monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
        // Ensure nohoisted libraries are resolved from this workspace.
        monorepoWebpackTools.addNohoistAliases(webpackConfig);

        return webpackConfig;
      },
      alias: {
        'react-native$': 'react-native-web',
      },
      plugins: {
        add: [
          // Inject the "__DEV__" global variable.
          new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV !== "production",
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
    },
  }
};