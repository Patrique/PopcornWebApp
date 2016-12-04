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
					return $resource('https://yts.ag/api/v2/list_movies.json').get({sort_by: 'download_count', page: pageNumber, limit: '30'});
				}
			};
		}
})();
