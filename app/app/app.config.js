(function() {
    'use strict';

    /**
     * @ngdoc configuration file
     * @name app.config:config
     * @description
     * # Config and run block
     * Configutation of the app
     */


    angular
        .module('popcorn')
        .config(configure)
        .run(runBlock);
    angular
        .module('infinite-scroll')
        .value('THROTTLE_MILLISECONDS', 250)

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

        $locationProvider.hashPrefix('!');

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('orange')
            .dark();
        $urlRouterProvider
            .otherwise('/popular');

    }

    runBlock.$inject = ['$rootScope'];

    function runBlock($rootScope) {
        'use strict';
    }


})();
