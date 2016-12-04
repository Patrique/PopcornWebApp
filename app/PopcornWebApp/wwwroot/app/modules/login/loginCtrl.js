(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:loginCtrl
     * @description
     * # loginCtrl
     * Controller of the app
     */

    angular
        .module('login')
        .controller('LoginCtrl', Login);

    Login.$inject = ['LoginService', '$state', 'localStorageService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Login(LoginService, $state, localStorageService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.authenticate = function(provider) {
            var azureClient = new WindowsAzure.MobileServiceClient('https://popcornapi.azurewebsites.net');
            azureClient.login(provider).then(function(res) {
                localStorageService.set('userId', res.userId);
                localStorageService.set('mobileServiceAuthenticationToken', res.mobileServiceAuthenticationToken);
                if($rootScope.previousState !== null){
                    $state.go($rootScope.previousState);
                }
                else{
                    $state.go('home.trending');
                }
            });
        };
    }
})();
