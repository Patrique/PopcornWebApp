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

    Player.$inject = ['PlayerService', '$rootScope', '$stateParams', '$state', 'Hub', '$scope', '$timeout', 'localStorageService'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Player(PlayerService, $rootScope, $stateParams, $state, Hub, $scope, $timeout, localStorageService) {
        /*jshint validthis: true */
        var vm = this;
        if ($stateParams.movie === null) {
            $state.go('home.trending')
            return;
        }

        vm.loaded = false;
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

        vm.movie = $stateParams.movie;

        $rootScope.$on('ServerConnected', function(){
          var torrent = _.first(_.where(vm.movie.torrents, { size_bytes: _.min(_.pluck(vm.movie.torrents, 'size_bytes')) }));
          hub.invokeWithArgs('Download', [torrent.url, vm.movie.imdb_code], function(data){
            console.log(data);
          });
        });

        var hub = Hub(Hub.defaultServer, 'PopcornHub', localStorageService.get('userId'));
        hub.on('DownloadRateChanged', function(res) {
          console.log(res);
        });
        hub.on('DownloadProgressChanged', function(res) {
          console.log(res);

        });
        hub.on('MovieUpdated', function(res) {
          console.log(res);

        });
        hub.on('MovieFailed', function(res) {
          console.log(res);

        });
    }
})();
