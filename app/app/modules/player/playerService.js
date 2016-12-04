(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:playerService
	 * @description
	 * # playerService
	 * Service of the app
	 */

  	angular
		.module('player')
		.factory('PlayerService', Player);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Player.$inject = ['$resource'];

		function Player ($resource) {
			return {
				getMovies: function(pageNumber){
					return $resource('https://yts.ag/api/v2/list_movies.json').get({sort_by: 'download_count', page: pageNumber, limit: '30'});
				}
			};
		}
})();
