module.exports = function (config) {
    config.addPassthroughCopy('./src/static');
    config.addWatchTarget('./src/styles');
    config.addWatchTarget('./src/js/');

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
