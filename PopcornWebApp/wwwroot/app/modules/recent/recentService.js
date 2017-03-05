(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:recentService
	 * @description
	 * # recentService
	 * Service of the app
	 */

  	angular
		.module('recent')
		.factory('RecentService', Recent);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Recent.$inject = ['$resource'];

		function Recent ($resource) {
			return {
				getMovies: function(pageNumber){
					return $resource('https://popcornapi.azurewebsites.net/api/movies').get({sort_by: 'date_added', page: pageNumber, limit: '30'});
				}
			};
		}

})();
