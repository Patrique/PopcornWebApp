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

    Login.$inject = ['LoginService', 'Azureservice'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Login(LoginService, Azureservice) {
        /*jshint validthis: true */
        var vm = this;
        vm.authenticate = function(provider) {
            Azureservice.login('provider')
                .then(function() {
                    console.log('Login successful');
                }, function(err) {
                    console.error('Azure Error: ' + err);
                });
        };
    }
})();
