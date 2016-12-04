(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:movieService
     * @description
     * # movieService
     * Service of the app
     */

    angular
        .module('movie')
        .factory('MovieService', Movie);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Movie.$inject = ['$resource'];

    function Movie($resource) {
        return {
            getMovie: function(id) {
                return $resource('https://yts.ag/api/v2/movie_details.json').get({ movie_id: id, with_images: 'true', with_cast: 'true' });
            },
            getTMDbInfo: function(id) {
                return $resource('https://api.themoviedb.org/3/find/:id').get({ api_key: 'a21fe922d3bac6654e93450e9a18af1c', id: id, external_source: 'imdb_id' });
            }
        };
    }

})();
