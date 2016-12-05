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
        'SignalR',
        'player',
        'underscore',
        'login',
        'LocalStorageModule',
        'azure',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster'
    ]);

})();
