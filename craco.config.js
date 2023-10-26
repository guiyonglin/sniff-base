const path = require('path');

const config = {
    webpack: {
        entry: './src/index.js',
        externals: {
        react: 'React',
        }
    },
};

module.exports = config;
