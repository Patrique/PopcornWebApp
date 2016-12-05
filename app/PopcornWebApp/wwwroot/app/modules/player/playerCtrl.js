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
            $state.go($rootScope.previousState, $rootScope.previousParams);
        };

        var hub = Hub('PopcornHub', localStorageService.get('userId').split(':')[1]);
        hub.on('DownloadRateChanged', function(res) {});
        hub.on('DownloadProgressChanged', function(progress) {
            if (progress <= 2) {
                vm.serverBuffer = Math.round(progress * 50);
            } else {
                vm.serverBuffer = 100;
            }
        });
        hub.on('MovieUpdated', function(movie) {
            if (movie.MovieFilePath !== null && !vm.playerReady) {
                vm.config.sources = [{ src: $sce.trustAsResourceUrl(movie.MovieFilePath), type: "video/mp4" }];
                vm.playerReady = true;
            }
        });
        hub.on('MovieFailed', function(res) {

        });
        hub.start().then(function(res) {
            var torrent = _.first(_.where(vm.movie.torrents, { size_bytes: _.min(_.pluck(vm.movie.torrents, 'size_bytes')) }));
            hub.invokeWithArgs('Download', [torrent.url, vm.movie.imdb_code], function() {});
        });
    }
})();
