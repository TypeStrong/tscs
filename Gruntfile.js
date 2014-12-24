module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            options: {
                compiler: "./lib/node_modules/TypeScript/bin/tsc.js",
            },
            default: {
                src: [
                    "**/*.ts",
                    "!node_modules/**/*.ts",
                    "!**/TypeScript/**/*"
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};