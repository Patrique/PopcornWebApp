// Grunt tasks

module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            '* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
            '* @author <%= pkg.author %>\n' +
            '*/\n',

        clean: {
            dist: ['src']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: ['app/modules/**/*.js']
            }
        },

        exec: {
            bowerInstaller: 'bower-installer'
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: false
            },
            base: {
                src: [
                    // Angular Project Dependencies,
                    'app/app.js',
                    'app/app.config.js',
                    'app/modules/**/*Module.js',
                    'app/modules/**/*Route.js',
                    'app/modules/**/*Ctrl.js',
                    'app/modules/**/*Service.js',
                    'app/modules/**/*Directive.js'
                ],
                dest: 'app/assets/js/<%= pkg.name %>-appbundle.js'
            },
            build: {
                src: [
                    // Angular Project Dependencies,
                    'app/assets/libs/angular/angular.js',
                    'app/assets/libs/**/*.js'

                ],
                dest: 'app/assets/js/<%= pkg.name %>-angularbundle.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'min'
            },
            base: {
                src: ['<%= concat.base.dest %>'],
                dest: 'app/assets/js/<%= pkg.name %>-angscript.min.js'
            },
            basePlugin: {
                src: ['src/plugins/**/*.js'],
                dest: 'app/assets/js/plugins/',
                expand: true,
                flatten: true,
                ext: '.min.js'
            }
        },

        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 4000,
                    base: '.',
                    hostname: 'localhost',
                    debug: true,
                    livereload: true,
                    open: true
                }
            }
        },
        concurrent: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },

        watch: {
            app: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:app'],
                options: {
                    livereload: true
                }
            }
        },

        injector: {
            options: {},
            dev: {
                files: {
                    'index.html': [
                        'bower_components/angular-imagefit/jquery-1.11.3.min.js',
                        'bower_components/es5-shim/es5-shim.js',
                        'bower_components/json3/lib/json3.min.js',
                        'bower_components/angular/angular.min.js',
                        'bower_components/angular-aria/angular-aria.min.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'bower_components/angular-cookies/angular-cookies.min.js',
                        'bower_components/angular-animate/angular-animate.min.js',
                        'bower_components/angular-sanitize/angular-sanitize.min.js',
                        'bower_components/angular-resource/angular-resource.min.js',
                        'bower_components/angular-material-icons/angular-material-icons.min.js',
                        'bower_components/angular-messages/angular-messages.min.js',
                        'bower_components/angular-material/angular-material.min.js',
                        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                        'bower_components/angular-imagefit/image-scale.js',
                        'bower_components/angular-imagefit/angular-imagefit.js',
                        'bower_components/angular-jk-rating-stars/dist/jk-rating-stars.min.js',
                        'bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js',
                        'bower_components/signalr/jquery.signalR.min.js',
                        'bower_components/angular-signalr-hub/signalr-hub.min.js',
                        'app/app.js',
                        'app/app.config.js',
                        'app/**/*Module.js',
                        'app/**/*Route.js',
                        'app/**/*Ctrl.js',
                        'app/**/*Service.js',
                        'app/**/*Directive.js'
                    ]
                }
            },
            production: {
                files: {
                    'index.html': [
                        'app/assets/css/**/*.css',
                        'app/assets/js/*.js'
                    ]

                }
            }
        },

        ngtemplates: {
            app: {
                src: 'app/modules/**/*.html',
                dest: 'app/assets/js/templates.js',
                options: {
                    module: '<%= pkg.name %>',
                    root: 'app/',
                    standAlone: false
                }
            }
        }



    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project if something fail.
    grunt.option('force', true);

    // Register grunt tasks
    grunt.registerTask("build", [
        "exec",
        "concat",
        "ngtemplates",
        "injector:production",
        "concurrent",
        "clean"
    ]);

    // Development task(s).
    grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
