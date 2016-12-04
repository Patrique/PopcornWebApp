(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:LayoutCtrl
     * @description
     * # LayoutCtrl
     * Controller of the app
     */

    angular
        .module('popcorn')
        .controller('LayoutCtrl', Layout);

    Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog', '$rootScope', 'SearchService', '$q', '$timeout'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog, $rootScope, SearchService, $q, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.loading = false;
        $rootScope.$on('loading', function() {
            vm.loading = true;
        });

        $rootScope.$on('loaded', function() {
            vm.loading = false;
        });

        vm.tabIndex = $state.current.name;
        $rootScope.$on('$stateChangeSuccess', function(event, current) {
            vm.tabIndex = current.name;
        });
        vm.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        vm.querySearch = function(query) {
            var deferred = $q.defer();
            SearchService.search(query).$promise.then(function(res) {
                if (res.data.movie_count === 0) {
                    deferred.resolve([]);
                } else {
                    deferred.resolve(res.data.movies);
                }
            });
            return deferred.promise;
        };

        vm.searchTextChange = function(text) {

        };

        vm.selectedItemChange = function(item) {
            vm.showSearch = false;
            vm.searchText = '';
            if (item !== undefined) {
                $state.go('home.movie', { id: item.id })
            }
        };
    }

})();
