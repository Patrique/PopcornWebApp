(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('popcorn')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"},
			{"image": "https://yts.ag/assets/images/movies/jason_bourne_2016/medium-cover.jpg"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();
