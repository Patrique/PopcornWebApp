'use strict';

/**
 * @ngdoc function
 * @name app.route:popularRoute
 * @description
 * # popularRoute
 * Route of the app
 */

angular.module('popular')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.popular', {
				url:'/popular',
				templateUrl: 'app/modules/popular/popular.html',
				controller: 'PopularCtrl',
				controllerAs: 'vm'
			});

		
	}]);
