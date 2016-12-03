(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:movieTest
	 * @description
	 * # movieTest
	 * Test of the app
	 */

	describe('movie test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('MovieCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
