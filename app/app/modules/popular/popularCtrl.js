(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:popularCtrl
     * @description
     * # popularCtrl
     * Controller of the app
     */

    angular
        .module('popular')
        .controller('PopularCtrl', Popular);

    Popular.$inject = ['PopularService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Popular(PopularService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.page = 0;
        vm.movies = [];
        var loadMovies = function(pageNumber) {
            PopularService.getMovies(pageNumber).$promise.then(function(res) {
                if (vm.page === res.data.page_number)
                    return;
                vm.page = res.data.page_number;
                for (var i = 0; i < res.data.movies.length; i++) {
                    vm.movies.push(res.data.movies[i]);
                }
                $rootScope.$broadcast('loaded');
            }).catch(function(err) {
                $rootScope.$broadcast('loaded');
            });
        };

        vm.paginate = function() {
            $rootScope.$broadcast('loading');
            loadMovies(vm.page + 1);
        }
    }

})();
