// Grunt tasks

module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['src']
        },

        exec: {
            bowerInstaller: 'bower-installer'
        },

        concat: {
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
                dest: 'app/assets/js/<%= pkg.name %>-appbundle.min.js'
            },
            build: {
                src: [
                    'app/assets/libs/underscore/underscore-min.js',
                    'app/assets/libs/angular-imagefit/jquery-1.11.3.min.js',
                    'app/assets/libs/es5-shim/es5-shim.js',
                    'app/assets/libs/json3/json3.min.js',
                    'app/assets/libs/angular/angular.js',
                    'app/assets/libs/angular-aria/angular-aria.js',
                    'app/assets/libs/angular-mocks/angular-mocks.js',
                    'app/assets/libs/angular-cookies/angular-cookies.js',
                    'app/assets/libs/angular-animate/angular-animate.js',
                    'app/assets/libs/angular-sanitize/angular-sanitize.js',
                    'app/assets/libs/angular-resource/angular-resource.js',
                    'app/assets/libs/angular-material-icons/angular-material-icons.min.js',
                    'app/assets/libs/angular-messages/angular-messages.js',
                    'app/assets/libs/angular-material/angular-material.js',
                    'app/assets/libs/angular-ui-router/angular-ui-router.js',
                    'app/assets/libs/ngInfiniteScroll/ng-infinite-scroll.js',
                    'app/assets/libs/angular-imagefit/image-scale.js',
                    'app/assets/libs/angular-imagefit/angular-imagefit.js',
                    'app/assets/libs/angular-jk-rating-stars/jk-rating-stars.min.js',
                    'app/assets/libs/angular-youtube-mb/angular-youtube-embed.js',
                    'app/assets/libs/signalr/jquery.signalR.js',
                    'app/assets/libs/angular-signalr-hub/signalr-hub.js',
                    'app/assets/libs/azure/MobileServices.Web-1.2.5.min.js',
                    'app/assets/libs/azure/angular-azure-mobile-service.min.js'
                ],
                dest: 'app/assets/js/<%= pkg.name %>-angularbundle.min.js'
            }
        },

        uglify: {
            options: {
                report: 'min'
            },
            base: {
                src: ['<%= concat.base.dest %>'],
                dest: 'app/assets/js/<%= pkg.name %>-appbundle.min.js'
            },
            angular: {
                src: ['<%= concat.build.dest %>'],
                dest: 'app/assets/js/<%= pkg.name %>-angularbundle.min.js'
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
                        'app/assets/libs/angular-imagefit/jquery-1.11.3.min.js',
                        'app/assets/libs/es5-shim/es5-shim.js',
                        'app/assets/libs/json3/json3.min.js',
                        'app/assets/libs/angular/angular.js',
                        'app/assets/libs/angular-aria/angular-aria.js',
                        'app/assets/libs/angular-mocks/angular-mocks.js',
                        'app/assets/libs/angular-cookies/angular-cookies.js',
                        'app/assets/libs/angular-animate/angular-animate.js',
                        'app/assets/libs/angular-sanitize/angular-sanitize.js',
                        'app/assets/libs/angular-resource/angular-resource.js',
                        'app/assets/libs/angular-material-icons/angular-material-icons.min.js',
                        'app/assets/libs/angular-messages/angular-messages.js',
                        'app/assets/libs/angular-material/angular-material.js',
                        'app/assets/libs/angular-ui-router/angular-ui-router.js',
                        'app/assets/libs/ngInfiniteScroll/ng-infinite-scroll.js',
                        'app/assets/libs/angular-imagefit/image-scale.js',
                        'app/assets/libs/angular-imagefit/angular-imagefit.js',
                        'app/assets/libs/angular-jk-rating-stars/jk-rating-stars.min.js',
                        'app/assets/libs/angular-youtube-mb/angular-youtube-embed.js',
                        'app/assets/libs/signalr/jquery.signalR.js',
                        'app/assets/libs/angular-signalr-hub/signalr-hub.js',
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
        "uglify",
        "concurrent",
        "clean"
    ]);

    // Development task(s).
    grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
