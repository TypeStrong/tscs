module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            options: {
                compiler: "./lib/node_modules/TypeScript/bin/tsc.js",
                module: 'commonjs',
                sourceMap: false
            },
            default: {
                src: [
                    "**/*.ts",
                    "!node_modules/**/*.ts",
                    "!**/TypeScript/**/*"
                ],
                watch: './lib',
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};