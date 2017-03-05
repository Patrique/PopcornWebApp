(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:popularService
     * @description
     * # popularService
     * Service of the app
     */

    angular
        .module('popular')
        .factory('PopularService', PopularService);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    PopularService.$inject = ['$resource'];

    function PopularService($resource) {
        return {
            getMovies: function(pageNumber) {
                return $resource('https://popcornapi.azurewebsites.net/api/movies').get({ sort_by: 'rating', page: pageNumber, limit: '30' });
            }
        };
    }

})();
