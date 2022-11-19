module.exports = function (config) {
    config.addPassthroughCopy('./src/static');
    config.addWatchTarget('./src/styles');

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
