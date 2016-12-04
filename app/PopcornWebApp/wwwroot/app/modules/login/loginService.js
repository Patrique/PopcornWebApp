(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:playerService
	 * @description
	 * # playerService
	 * Service of the app
	 */

  	angular
		.module('login')
		.factory('LoginService', Login);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Login.$inject = [];

		function Login () {
			return {
			};
		}
})();
