(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:SearchService
     * @description
     * # popularService
     * Service of the app
     */

    angular
        .module('popular')
        .factory('SearchService', SearchService);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    SearchService.$inject = ['$resource'];

    function SearchService($resource) {
        return {
            search: function(query) {
                return $resource('https://popcornapi.azurewebsites.net/api/movies?page=1').get({ query_term: query });
            }
        };
    }

})();
