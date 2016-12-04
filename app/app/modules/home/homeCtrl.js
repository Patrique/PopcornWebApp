(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('popcorn')
		.controller('HomeCtrl', Home);

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home() {
		/*jshint validthis: true */
		var vm = this;
	}

})();
