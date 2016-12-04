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
                return $resource('https://yts.ag/api/v2/list_movies.json').get({ query_term: query });
            }
        };
    }

})();
