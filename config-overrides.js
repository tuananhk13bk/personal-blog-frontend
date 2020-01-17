const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  useBabelRc,
} = require('customize-cra')

function srcPath(subDir) {
  return path.join(__dirname, 'src', subDir)
}

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    assets: srcPath('assets'),
    components: srcPath('components'),
    configs: srcPath('configs'),
    constants: srcPath('constants'),
    containers: srcPath('containers'),
    services: srcPath('services'),
    themes: srcPath('themes'),
    hocs: srcPath('hocs'),
    hooks: srcPath('hooks'),
    types: srcPath('types'),
    pages: srcPath('pages'),
    icons: srcPath('icons'),
    reducers: srcPath('reducers'),
    sagas: srcPath('sagas'),
    utils: srcPath('utils'),
    validation: srcPath('validation'),
    translations: srcPath('translations'),
  }),
  process.env.NODE_ENV === 'production' &&
    addWebpackPlugin(
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          output: { comments: false },
          compress: { drop_console: true, drop_debugger: true },
        },
      }),
    ),
)
