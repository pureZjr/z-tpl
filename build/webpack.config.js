const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const { resolveFromRootDir } = require('./utils')

module.exports = {
    mode: process.env.APP_ENV,
    entry: {
        app: resolveFromRootDir('src/index.tsx')
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true
    },
    output: {
        path: resolveFromRootDir('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [...jsRules, ...styleRules, ...fileRules]
    },
    plugins: [...plugins],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        plugins: [
            new TsconfigPathsWebpackPlugin({
                configFile: resolveFromRootDir('tsconfig.json')
            })
        ]
    },
    // 开启缓存，加快开发环境构建速度
    cache: {
        type: 'filesystem',
        cacheLocation: resolveFromRootDir('.cache')
    },
    optimization: {
        innerGraph: false,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // 匹配需要压缩的文件、可以指定文件夹
                // 提供include、exclude
                test: /\.js(\?.*)?$/i,
                // 默认开启并行提高构建速度
                parallel: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            })
        ]
    }
}
