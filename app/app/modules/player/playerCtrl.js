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

    Player.$inject = ['PlayerService', '$rootScope', '$stateParams', '$state', 'Hub'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Player(PlayerService, $rootScope, $stateParams, $state, Hub) {
        /*jshint validthis: true */
        var vm = this;
        if ($stateParams.movie === null) {
            $state.go('home.trending')
            return;
        }

        vm.movie = $stateParams.movie;

        var hub = Hub(Hub.defaultServer, 'PopcornHub');
        hub.on('DownloadRateChanged', function(res) {

        });
        hub.on('DownloadProgressChanged', function(res) {

        });
        hub.on('MovieUpdated', function(res) {

        });
        hub.on('MovieFailed', function(res) {

        });
        var torrent = _.first(_.where(vm.movie.torrents, { size_bytes: _.min(_.pluck(vm.movie.torrents, 'size_bytes')) }));
        hub.invokeWithArgs('Download', torrent.url, vm.movie.imdb_code);
    }
})();
