const { resolveFromRootDir } = require('../utils')

module.exports = [
    {
        test: /\.scss$/,
        include: [resolveFromRootDir('src')],
        use: [
            'style-loader',
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolveFromRootDir('.cache-loader')
                }
            },
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [resolveFromRootDir('src/styles')]
                }
            }
        ]
    }
]
