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
                return $resource('https://popcornapi.azurewebsites.net/api/movies/:id').get({ id: id });
            },
            getTrailer: function(yt_trailer_code){
                return $resource('https://popcornapi.azurewebsites.net/api/trailer/:yt_trailer_code').get({yt_trailer_code: yt_trailer_code});
            }
        };
    }

})();
