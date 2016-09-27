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
                    'css/main.css': '_sass/app.sass'
                }
            }
        },

        watch: {
            sass: {
                files: '_sass/**/*',
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*','_posts/*', 'css/*', 'js/*.js', 'index.html', ],
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
                port: 5000
            }
        },
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    newFilesOnly: false,
                    sizes: [{
                        name: "thumbnails",
                        width: '175px',
                        height: '200px',
                        aspectRatio: true
                    }],
                    quality: 80
                },
                files: [{
                    expand: true,
                    src: ['**.{JPG,gif,png,jpg}'],
                    cwd: 'images/sponsor_logos/',
                    dest: 'images/sponsor_thumbnails/'
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
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
    grunt.registerTask('resize', ['responsive_images']);
    grunt.registerTask('min', ['cssmin', 'uglify']);
};
