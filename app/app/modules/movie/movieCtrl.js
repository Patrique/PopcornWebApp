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

    Movie.$inject = ['$stateParams', 'MovieService', '$scope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Movie($stateParams, MovieService, $scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.movie = {};
        vm.loaded = false;
        MovieService.getMovie($stateParams.id).$promise.then(function(res) {
                vm.movie = res.data.movie;
                vm.movie.rating = Math.round(vm.movie.rating/2);
                return MovieService.getTMDbInfo(vm.movie.imdb_code).$promise;
            }).then(function(res) {
              console.log(vm.movie);
                vm.movie.background = 'https://image.tmdb.org/t/p/original' + res.movie_results[0].backdrop_path;
            })
            .catch(function(err) {
                vm.loaded = true;
            });

        vm.imageLoaded = function() {
            $scope.$apply(function() {
                vm.loaded = true;
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
