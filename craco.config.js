const path = require('path');
const CracoCSSModules = require('craco-css-modules');

const config = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        configure: (webpackConfig, { env, paths }) => {
            if (
                webpackConfig &&
                webpackConfig.output &&
                env !== 'development'
            ) {
                // 主要是为了 cdn 域名转发的时候路径处理，觉得不应该侵入到打包过程中，因为开发者不应该知道转发路径到底是什么
                // 而且后期所有的 文件 emit 都应该丢到 oem 中，配置 plugin 的时候需要注意!!!
                const publicPath = getPublicPath();
                if (publicPath) {
                    webpackConfig.output.publicPath = publicPath;
                }
            }

            return webpackConfig;
        },
        externals: {
            react: 'React',
        }
    },
    plugins: [{ plugin: CracoCSSModules }]
};

module.exports = config;
