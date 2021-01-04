const { resolveFromRootDir } = require('../utils')

let cache = {}

// 开启缓存，加快开发环境构建速度
if (process.env.APP_ENV === 'development') {
    cache = {
        type: 'filesystem',
        cacheLocation: resolveFromRootDir('.cache')
    }
}

module.exports = cache
