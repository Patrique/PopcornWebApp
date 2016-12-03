(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:trendingTest
	 * @description
	 * # trendingTest
	 * Test of the app
	 */

	describe('trending test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('popcorn');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('TrendingCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
