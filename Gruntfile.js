module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            all: {
                files: '**/*.js',
                tasks: ['lint']
            }
        },
        eslint: {
            target: [
                '**/*.js'
            ]
        },
    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('lint', ['eslint']);
};