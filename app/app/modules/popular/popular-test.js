(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:popularTest
	 * @description
	 * # popularTest
	 * Test of the app
	 */

	describe('popular test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('popcorn');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('PopularCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
