module.exports = function (api) {
    api.cache(false);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: '58',
                        ie: '11'
                    }
                }
            ]
        ],
        plugins: [
            '@babel/plugin-proposal-numeric-separator'
        ]
    }
};