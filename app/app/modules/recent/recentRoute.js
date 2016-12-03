'use strict';

/**
 * @ngdoc function
 * @name app.route:recentRoute
 * @description
 * # recentRoute
 * Route of the app
 */

angular.module('recent')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.recent', {
				url:'/recent',
				templateUrl: 'app/modules/recent/recent.html',
				controller: 'RecentCtrl',
				controllerAs: 'vm'
			});

		
	}]);
