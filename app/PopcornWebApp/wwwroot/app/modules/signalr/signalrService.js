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
        .factory('Hub', ['$', '$rootScope', 'backendServerUrl', '$q', '$timeout', function($, $rootScope, backendServerUrl, $q, $timeout) {
            function backendFactory(hubName, qs) {
                var connection = $.hubConnection(backendServerUrl);
                var proxy = connection.createHubProxy(hubName);
                proxy.connection.qs = { 'UserId': qs };

                return {
                    start: function() {
                        var deferred = $q.defer();
                        connection.start().done(function() {
                            deferred.resolve();
                        }).fail(function(err) {
                            deferred.reject();
                        });
                        return deferred.promise;
                    },
                    stop: function() {
                        connection.stop();
                    },
                    on: function(eventName, callback) {
                        proxy.on(eventName, function(result) {
                            $timeout(function() {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    },
                    invoke: function(methodName, callback) {
                        proxy.invoke(methodName)
                            .done(function(result) {
                                $timeout(function() {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            }).fail(function(err) {});
                    },
                    invokeWithArgs: function(methodName, args, callback) {
                        args.unshift(methodName);
                        proxy.invoke.apply(proxy, args)
                            .done(function(result) {
                                $timeout(function() {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            }).fail(function(err) {});
                    }
                };
            };

            return backendFactory;
        }]);
})();
