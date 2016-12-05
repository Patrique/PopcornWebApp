(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:movieCtrl
     * @description
     * # movieCtrl
     * Controller of the app
     */

    angular
        .module('movie')
        .controller('MovieCtrl', Movie);

    Movie.$inject = ['$stateParams', 'MovieService', '$scope', '$timeout', '$state', 'MobileServiceClient'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Movie($stateParams, MovieService, $scope, $timeout, $state, MobileServiceClient) {
        /*jshint validthis: true */
        if ($stateParams.id === null) {
            $state.go('home.trending');
            return;
        }

        var vm = this;
        vm.movie = {};
        vm.loaded = false;
        vm.goToPlayer = function(movie) {
            $state.go('home.player', { slug: vm.movie.slug, movie: vm.movie });
        };
        MovieService.getMovie($stateParams.id).$promise.then(function(res) {
                vm.movie = res.data.movie;
                vm.movie.rating = Math.round(vm.movie.rating / 2);
                vm.movie.genre = vm.movie.genres.join(', ');
                return MovieService.getTMDbInfo(vm.movie.imdb_code).$promise;
            }).then(function(res) {
                vm.movie.background = 'https://image.tmdb.org/t/p/original' + res.movie_results[0].backdrop_path;
                var service = MobileServiceClient.getMobileService();
                service.invokeApi('Movie', {
                  method: 'GET',
                  parameters: {
                    ytCode: vm.movie.yt_trailer_code
                  }
                }).then(function(data){
                  vm.movie.trailerUrl = data.result;
                });
            })
            .catch(function(err) {
                vm.loaded = true;
            });

        vm.imageLoaded = function() {
            $scope.$apply(function() {
                vm.loaded = true;
                $timeout(function() {
                    $(window).trigger('resize');
                });
            });
        }

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
    }
})();
