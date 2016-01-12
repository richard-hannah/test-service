module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            core: {
                files: [{
                    expand: true,
                    cwd: 'src/test/resources',
                    src: 'public/js/**/*.js',
                    dest: "target/classes",
                    ext: '.min.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};