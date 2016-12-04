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

    Login.$inject = ['LoginService', 'Azureservice', '$state'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Login(LoginService, Azureservice, $state) {
        /*jshint validthis: true */
        var vm = this;
        vm.authenticate = function(provider) {
            Azureservice.login(provider)
                .then(function() {
                    console.log('Login successful');
                    $state.go('home.trending');
                }, function(err) {
                    console.error('Azure Error: ' + err);
                });
        };
    }
})();
