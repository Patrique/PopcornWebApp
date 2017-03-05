(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:stopButton
     * @description
     * # stopButton
     * Service of the app
     */

    angular
        .module('popcorn')
        .directive('stopButton', ['$rootScope', function($rootScope) {
            return {
                restrict: "E",
                require: "^videogular",
                template: "<div><md-icon md-svg-src='/app/assets/images/stop.svg' ng-click='stop();'></md-icon></div>",
                link: function(scope, elem, attrs) {
                    scope.stop = function(){
                        $rootScope.$broadcast('StopMovie');
                    };
                }
            }
        }]);

})();
