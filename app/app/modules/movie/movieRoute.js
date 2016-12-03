'use strict';

/**
 * @ngdoc function
 * @name app.route:movieRoute
 * @description
 * # movieRoute
 * Route of the app
 */

angular.module('movie')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie', {
				url:'/:id',
				templateUrl: 'app/modules/movie/movie.html',
				controller: 'MovieCtrl',
				controllerAs: 'vm'
			});
		
	}]);
