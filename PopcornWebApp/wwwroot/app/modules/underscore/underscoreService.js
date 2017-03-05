(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:UnderscoreService
     * @description
     * # UnderscoreService
     * Service of the app
     */

    angular
        .module('underscore')
        .factory('UnderscoreService', Underscore);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Underscore.$inject = [''];

    function Underscore() {
        return window._;
    }
})();
