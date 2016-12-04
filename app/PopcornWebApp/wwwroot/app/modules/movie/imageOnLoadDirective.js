(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:imageonload
     * @description
     * # movieService
     * Service of the app
     */

    angular
        .module('popcorn')
        .directive('imageonload', function() {
            return {
                restrict: 'A',
                scope: {
                    imgloaded: '&'
                },
                link: function(scope, element, attrs) {
                    element.bind('load', function() {
                        scope.imgloaded();
                    });
                    element.bind('error', function() {
                    });
                }
            };
        });

})();
