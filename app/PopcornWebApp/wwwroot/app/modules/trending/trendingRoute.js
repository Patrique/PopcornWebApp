'use strict';

/**
 * @ngdoc function
 * @name app.route:trendingRoute
 * @description
 * # trendingRoute
 * Route of the app
 */

angular.module('trending')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.trending', {
				url:'/trending',
				templateUrl: 'app/modules/trending/trending.html',
				controller: 'TrendingCtrl',
				controllerAs: 'vm'
			});

		
	}]);
