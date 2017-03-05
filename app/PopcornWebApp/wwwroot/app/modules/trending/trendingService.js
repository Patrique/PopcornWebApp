(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:trendingService
	 * @description
	 * # trendingService
	 * Service of the app
	 */

  	angular
		.module('trending')
		.factory('TrendingService', Trending);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Trending.$inject = ['$resource'];

		function Trending ($resource) {
			return {
				getMovies: function(pageNumber){
					return $resource('https://popcornapi.azurewebsites.net/api/movies').get({sort_by: 'download_count', page: pageNumber, limit: '30'});
				}
			};
		}
})();
