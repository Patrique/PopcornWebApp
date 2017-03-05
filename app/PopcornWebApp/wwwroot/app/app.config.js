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
        .value('THROTTLE_MILLISECONDS', 1000);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider', 'localStorageServiceProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider, localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('popcorn')
            .setStorageType('localStorage')
            .setNotify(true, true)
        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('orange')
            .dark();
        $urlRouterProvider
            .otherwise(function($injector) {
                var $state = $injector.get("$state");
                $state.go("home.popular");
            });

    }

    runBlock.$inject = ['$rootScope', '$state', 'localStorageService'];

    function runBlock($rootScope, $state, localStorageService) {
        'use strict';
        $rootScope.previousParams;
        $rootScope.previousState;
        $rootScope.currentState;
        $rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
            $rootScope.previousParams = fromParams;
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;

            if(from.name === 'home.player'){
                $rootScope.$broadcast('HomePlayerExited');
            }
        });
    }


})();
