const htmlmin = require('html-minifier');

module.exports = function (config) {
    config.addPassthroughCopy('./src/static');

    config.addWatchTarget('./src/styles');
    config.addWatchTarget('./src/js/');

    config.addTransform('htmlmin', function (content, outputPath) {
        if (outputPath && outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
