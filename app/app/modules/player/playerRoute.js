'use strict';

/**
 * @ngdoc function
 * @name app.route:playerRoute
 * @description
 * # playerRoute
 * Route of the app
 */

angular.module('player')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.player', {
				url:'/movie/:slug/play',
				templateUrl: 'app/modules/player/player.html',
				controller: 'PlayerCtrl',
				controllerAs: 'vm',
				params: {
					movie: null
				}
			});

		
	}]);
