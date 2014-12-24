module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: [
                    "**/*.ts",
                    "!node_modules/**/*.ts",
                    "!./TypeScript/**/*"
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};