(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:recentTest
	 * @description
	 * # recentTest
	 * Test of the app
	 */

	describe('recent test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('popcorn');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RecentCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
