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

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider', '$authProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider, $authProvider) {

        $authProvider.facebook({
            clientId: '1801215903426711'
        });

        $authProvider.google({
            clientId: '423721478886-1pnu843u2lvsfqmlqptkaldmlhhn1fnf.apps.googleusercontent.com'
        });

        $authProvider.live({
            clientId: '1025a72b-d09c-4f9a-aa14-5819e08b2d53'
        });

        $locationProvider.hashPrefix('!');

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('orange')
            .dark();
        $urlRouterProvider
            .otherwise('/trending');

    }

    runBlock.$inject = ['$rootScope', 'Azureservice', '$state'];

    function runBlock($rootScope, Azureservice, $state) {
        'use strict';
        $rootScope.previousParams;
        $rootScope.previousState;
        $rootScope.currentState;

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            if (!Azureservice.isLoggedIn()) {
                ev.preventDefault();
                $state.go('login');
                return;
            }

            $rootScope.previousParams = fromParams;
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
        });
    }


})();
