(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:recentService
     * @description
     * # recentService
     * Service of the app
     */

    angular
        .module('azure')
        .service('MobileServiceClient', function() {
            var service = new WindowsAzure.MobileServiceClient('https://popcornapi.azurewebsites.net');
            this.getMobileService = function() {
                return service;
            };
        });
})();
