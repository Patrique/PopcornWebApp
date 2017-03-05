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

    Movie.$inject = ['$stateParams', 'MovieService', '$scope', '$timeout', '$state', '$sce'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Movie($stateParams, MovieService, $scope, $timeout, $state, $sce) {
        /*jshint validthis: true */
        if ($stateParams.imdb_code === null) {
            $state.go('home.trending');
            return;
        }

        var vm = this;
        vm.movie = {};
        vm.loaded = false;
        vm.goToPlayer = function(movie) {
            $state.go('home.player', { slug: vm.movie.slug, movie: vm.movie });
        };

        vm.config = {
            sources: [],
            theme: "/app/assets/css/videogular-themes-default/videogular.css",
            plugins: {
                poster: vm.movie.background
            }
        };

        MovieService.getMovie($stateParams.imdb_code).$promise.then(function(res) {
          vm.movie = res.data.movie;
          vm.movie.rating = Math.round(vm.movie.rating / 2);
          vm.movie.genre = vm.movie.genres.join(', ');
          MovieService.getTrailer(vm.movie.yt_trailer_code).$promise.then(function(data) {
              vm.movie.trailerUrl = data.result;
              vm.config.sources = [{ src: $sce.trustAsResourceUrl(vm.movie.trailerUrl), type: "video/mp4" }];
          });
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
