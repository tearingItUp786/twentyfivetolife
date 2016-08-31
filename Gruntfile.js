module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({

        jekyll: {
            build: {
                dest: '_site'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.html', 'css/*', 'js/*.js', 'index.html', ],
                tasks: ['jekyll']
            }
        },

        browserSync: {
            files: {
                src: ['_site/css/*.css', '_site/*.html']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                },
                port: 8080
            }
        },
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    newFilesOnly: false,
                    sizes: [{
                        namge: "small",
                        width: '350px',
                        height: '350px',
                        aspectRatio: false
                    }],
                    quality: 80
                },
                files: [{
                    expand: true,
                    src: ['**.{JPG,gif,png}'],
                    cwd: 'images/portfolio_originals/',
                    dest: 'images/thumbnails/'
                }]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/main.min.css': ['css/main.css'],
                }
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'js/sourcemap.map'
                },
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
    grunt.registerTask('resize', ['responsive_images']);
    grunt.registerTask('min', ['cssmin', 'uglify']);
};
