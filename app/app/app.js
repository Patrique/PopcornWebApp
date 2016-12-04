(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('popcorn', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'popular',
		'trending',
		'recent',
		'infinite-scroll',
		'movie',
		'angular-imagefit',
		'jkAngularRatingStars',
		'youtube-embed',
		'SignalR',
		'player',
		'underscore',
		'login',
		'azure-mobile-service.module'
	]);

})();
