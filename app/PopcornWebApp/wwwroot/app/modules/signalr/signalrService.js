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
        .constant('backendServerUrl', 'https://server.popcorn.cool')
        .factory('Hub', ['$', '$rootScope', 'backendServerUrl', function($, $rootScope, backendServerUrl) {
            function backendFactory(serverUrl, hubName, qs) {
                var connection = $.hubConnection(backendServerUrl);
                var proxy = connection.createHubProxy(hubName);
                proxy.qs = { 'UserId' : qs };
                connection.start().done(function() {
                    $rootScope.$broadcast('ServerConnected');
                });

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
                            }).fail(function(err){
                                console.log(err);
                            });
                    },
                    invokeWithArgs: function(methodName, args, callback) {
                        args.unshift(methodName);
                        args.push(callback);
                        proxy.invoke.apply(proxy, args)
                            .done(function(result) {
                                $rootScope.$apply(function() {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            }).fail(function(err){
                                console.log(err);
                            });
                    }
                };
            };

            return backendFactory;
        }]);
})();
