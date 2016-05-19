module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({

        clean: ["dist"],

        copy: {
            src_to_dist: {
                cwd: 'src',
                expand: true,
                src: [
                    '**/*'
                ],
                dest: 'dist/'
            },
            pluginDef: {
                expand: true,
                src: ['plugin.json'],
                dest: 'dist/',
            }
        },

        watch: {
            rebuild_all: {
                files: ['src/**/*', 'plugin.json'],
                tasks: ['default'],
                options: {spawn: false}
            },
        },

        babel: {
            options: {
                sourceMap: true,
                presets:  ["es2015"],
                plugins: ['transform-es2015-modules-systemjs', "transform-es2015-for-of"],
            },
            dist: {
                files: [{
                    cwd: 'src',
                    expand: true,
                    src: [
                        '*.js',
                        'graphite_src/parser.js',
                        'graphite_src/lexer.js',
                        'models/*.js'
                    ],
                    dest: 'dist/'
                }]
            },
        }

    });

    grunt.registerTask('default', [
        'clean',
        'copy:src_to_dist',
        'copy:pluginDef',
        'babel'
    ]);
};