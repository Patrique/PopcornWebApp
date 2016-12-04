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
        .module('SignalR')
        .constant('$', $)
        .constant('backendServerUrl', 'http://popcorn.westeurope.cloudapp.azure.com')
        .factory('Hub', ['$', '$rootScope', 'backendServerUrl', function($, $rootScope, backendServerUrl) {
            function backendFactory(serverUrl, hubName) {
                var connection = $.hubConnection(backendServerUrl);
                var proxy = connection.createHubProxy(hubName);

                connection.start().done(function() {});

                return {
                    on: function(eventName, callback) {
                        proxy.on(eventName, function(result) {
                            $rootScope.$apply(function() {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    },
                    invoke: function(methodName, callback) {
                        proxy.invoke(methodName)
                            .done(function(result) {
                                $rootScope.$apply(function() {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                    },
                    invokeWithArgs: function(methodName) {
                        proxy.invoke.apply(proxy, arguments)
                            .done(function(result) { });
                    }
                };
            };

            return backendFactory;
        }]);
})();
