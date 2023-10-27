
const config = {
    webpack: {
        entry: './src/index.js',
        externals: {
            react: 'React',
            'react-dom': 'ReactDom'
        }
    },
};

module.exports = config;
