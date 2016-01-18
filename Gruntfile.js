module.exports = function(grunt) {

    grunt.initConfig({
        shell: {                                // Task
            runtests1: {                      // Target
                options: {                      // Options
                    stdout: true
                },
                command: 'jasmine-node spec/external'
            },
            runtests2: {                      // Target
                options: {                      // Options
                    stdout: true
                },
                command: 'jasmine-node spec/internal'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell']);
};

