(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:recentCtrl
     * @description
     * # recentCtrl
     * Controller of the app
     */

    angular
        .module('recent')
        .controller('RecentCtrl', Recent);

    Recent.$inject = ['RecentService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Recent(RecentService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.page = 0;
        vm.movies = [];
        var loadMovies = function(pageNumber) {
            RecentService.getMovies(pageNumber).$promise.then(function(res) {
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
