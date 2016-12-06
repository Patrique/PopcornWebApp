(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:playerCtrl
     * @description
     * # playerCtrl
     * Controller of the app
     */

    angular
        .module('player')
        .controller('PlayerCtrl', Player);

    Player.$inject = ['PlayerService', '$rootScope', '$stateParams', '$state', 'Hub', '$scope', '$timeout', 'localStorageService', '$sce'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Player(PlayerService, $rootScope, $stateParams, $state, Hub, $scope, $timeout, localStorageService, $sce) {
        /*jshint validthis: true */
        var vm = this;
        if ($stateParams.movie === null) {
            $state.go('home.trending')
            return;
        }
        vm.API = null;
        vm.onPlayerReady = function(API) {
            vm.API = API;
            $timeout(function() {
                vm.API.play();
            });
        };
        vm.movie = $stateParams.movie;

        vm.config = {
            sources: [],
            // tracks: [{
            //     src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            //     kind: "subtitles",
            //     srclang: "en",
            //     label: "English",
            //     default: ""
            // }],
            theme: "/app/assets/css/videogular-themes-default/videogular.css",
            plugins: {
                poster: vm.movie.background
            }
        };

        var movieSources = [];
        vm.playerReady = false;
        vm.loaded = false;
        vm.serverBuffer = 0;
        vm.movieBuffer = 0;
        vm.check = {
            scale: 'best-fill',
            onLoad: function(imagecontainer, container) {},
            onError: function(imagecontainer, container) {},
            onStart: function(imagecontainer, container) {},

            /**
              Align the image within its frame. Possible values:

              * **left**
              * **right**
              * **center**
              * **top**
              * **bottom**
              * **top-left**
              * **top-right**
              * **bottom-left**
              * **bottom-right**

              @type String
              @default center
              @since Version 1.2
            */
            align: 'center',
            parent: null,
            hideParentOverflow: true,
            fadeInDuration: 400,
            rescaleOnResize: true,
            didScale: function(firstTime, options) {},
        }

        vm.imageLoaded = function() {
            $scope.$apply(function() {
                vm.loaded = true;
                $timeout(function() {
                    $(window).trigger('resize');
                });
            });
        };

        vm.goPrevious = function() {
            $state.go('home.movie', vm.movie);
        };

        $rootScope.$on('StopMovie', function() {
            vm.goPrevious();
        });

        $rootScope.$on('HomePlayerExited', function() {
            hub.stop();
        });

        var hub = Hub('PopcornHub', localStorageService.get('userId').split(':')[1]);
        hub.on('DownloadRateChanged', function(res) {});

        var buffered = false;
        hub.on('DownloadProgressChanged', function(progress) {
            if (progress <= 2) {
                vm.serverBuffer = Math.round(progress * 50);
            } else {
                vm.serverBuffer = 100;
            }

            if (!buffered && vm.serverBuffer === 100) {
                buffered = true;
                vm.config.sources = movieSources;
                vm.playerReady = true;
            }
        });
        hub.on('MovieUpdated', function(movie) {
            if (movie.MovieFilePath !== null) {
                movieSources = [{ src: $sce.trustAsResourceUrl(movie.MovieFilePath), type: "video/mp4" }];
            }
        });
        hub.on('MovieFailed', function(res) {
            console.log(res);
        });
        hub.start().then(function() {
            var torrent = _.first(_.where(vm.movie.torrents, { size_bytes: _.min(_.pluck(vm.movie.torrents, 'size_bytes')) }));
            hub.invokeWithArgs('Download', [torrent.url, vm.movie.imdb_code], function() {});
        });
    }
})();
