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
        .constant('AzureMobileServiceClient', {
            API_URL: 'https://popcornapi.azurewebsites.net/',
            API_KEY: 'B17B3E4ED4632B9E63F37392A86BB767F5D20010412F68A993E97CC918716F13',
        })
        .config(configure)
        .run(runBlock);
    angular
        .module('infinite-scroll')
        .value('THROTTLE_MILLISECONDS', 1000);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider', 'localStorageServiceProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider, localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('popcorn')
            .setStorageType('sessionStorage')
            .setNotify(true, true)
        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('orange')
            .dark();
        $urlRouterProvider
            .otherwise('/trending');

    }

    runBlock.$inject = ['$rootScope', '$state', 'localStorageService'];

    function runBlock($rootScope, $state, localStorageService) {
        'use strict';
        $rootScope.previousParams;
        $rootScope.previousState;
        $rootScope.currentState;

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            $rootScope.previousParams = fromParams;
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
            if (localStorageService.get('userId') === null || localStorageService.get('mobileServiceAuthenticationToken') === null) {
                ev.preventDefault();
                $state.go('login');
                return;
            }
        });
    }


})();
