/*!
* popcorn - v0.0.1 - MIT LICENSE 2016-12-04. 
* @author Popcorn
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('popcorn', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'popular',
		'trending',
		'recent',
		'infinite-scroll',
		'movie',
		'angular-imagefit',
		'jkAngularRatingStars',
		'youtube-embed',
		'SignalR'
	]);

})();

(function() {
    'use strict';

    /**
     * @ngdoc configuration file
     * @name app.config:config
     * @description
     * # Config and run block
     * Configutation of the app
     */


    angular
        .module('popcorn')
        .config(configure)
        .run(runBlock);
    angular
        .module('infinite-scroll')
        .value('THROTTLE_MILLISECONDS', 1000);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

        $locationProvider.hashPrefix('!');

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('orange')
            .dark();
        $urlRouterProvider
            .otherwise('/trending');

    }

    runBlock.$inject = ['$rootScope'];

    function runBlock($rootScope) {
        'use strict';
    }


})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:movieModule
	 * @description
	 * # movieModule
	 * Module of the app
	 */

  	angular.module('movie', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:popularModule
	 * @description
	 * # popularModule
	 * Module of the app
	 */

  	angular.module('popular', ['ngResource']);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:recentModule
	 * @description
	 * # recentModule
	 * Module of the app
	 */

  	angular.module('recent', ['ngResource']);

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.module:signalR
     * @description
     * # recentModule
     * Module of the app
     */

    angular.module('SignalR', [])
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:trendingModule
	 * @description
	 * # trendingModule
	 * Module of the app
	 */

  	angular.module('trending', ['ngResource']);

})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('popcorn')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:movieRoute
 * @description
 * # movieRoute
 * Route of the app
 */

angular.module('movie')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie', {
				url:'/:id',
				templateUrl: 'app/modules/movie/movie.html',
				controller: 'MovieCtrl',
				controllerAs: 'vm'
			});
		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:popularRoute
 * @description
 * # popularRoute
 * Route of the app
 */

angular.module('popular')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.popular', {
				url:'/popular',
				templateUrl: 'app/modules/popular/popular.html',
				controller: 'PopularCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:recentRoute
 * @description
 * # recentRoute
 * Route of the app
 */

angular.module('recent')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.recent', {
				url:'/recent',
				templateUrl: 'app/modules/recent/recent.html',
				controller: 'RecentCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:trendingRoute
 * @description
 * # trendingRoute
 * Route of the app
 */

angular.module('trending')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.trending', {
				url:'/trending',
				templateUrl: 'app/modules/trending/trending.html',
				controller: 'TrendingCtrl',
				controllerAs: 'vm'
			});

		
	}]);

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('popcorn')
		.controller('HomeCtrl', Home);

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home() {
		/*jshint validthis: true */
		var vm = this;
	}

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:LayoutCtrl
     * @description
     * # LayoutCtrl
     * Controller of the app
     */

    angular
        .module('popcorn')
        .controller('LayoutCtrl', Layout);

    Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog', '$rootScope', 'SearchService', '$q', '$timeout'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog, $rootScope, SearchService, $q, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.loading = false;
        $rootScope.$on('loading', function() {
            vm.loading = true;
        });

        $rootScope.$on('loaded', function() {
            vm.loading = false;
        });

        vm.tabIndex = $state.current.name;
        $rootScope.$on('$stateChangeSuccess', function(event, current) {
            vm.tabIndex = current.name;
        });
        vm.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        vm.querySearch = function(query) {
            var deferred = $q.defer();
            SearchService.search(query).$promise.then(function(res) {
                if (res.data.movie_count === 0) {
                    deferred.resolve([]);
                } else {
                    deferred.resolve(res.data.movies);
                }
            });
            return deferred.promise;
        };

        vm.searchTextChange = function(text) {

        };

        vm.selectedItemChange = function(item) {
            vm.showSearch = false;
            vm.searchText = '';
            if (item !== undefined) {
                $state.go('home.movie', { id: item.id })
            }
        };
    }

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:movieCtrl
     * @description
     * # movieCtrl
     * Controller of the app
     */

    angular
        .module('movie')
        .controller('MovieCtrl', Movie);

    Movie.$inject = ['$stateParams', 'MovieService', '$scope', '$timeout', 'Hub'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Movie($stateParams, MovieService, $scope, $timeout, Hub) {
        /*jshint validthis: true */
        var vm = this;
        var hub = Hub(Hub.defaultServer, 'PopcornHub');
        vm.movie = {};
        vm.loaded = false;
        MovieService.getMovie($stateParams.id).$promise.then(function(res) {
                vm.movie = res.data.movie;
                vm.movie.rating = Math.round(vm.movie.rating / 2);
                vm.movie.genre = vm.movie.genres.join(', ');
                return MovieService.getTMDbInfo(vm.movie.imdb_code).$promise;
            }).then(function(res) {
                vm.movie.background = 'https://image.tmdb.org/t/p/original' + res.movie_results[0].backdrop_path;
                console.log(vm.movie);
            })
            .catch(function(err) {
                vm.loaded = true;
            });

        vm.imageLoaded = function() {
            $scope.$apply(function() {
                vm.loaded = true;
                $timeout(function() {
                    $(window).trigger('resize');
                }, 500);
            });
        }

        vm.check = {
            scale: 'best-fill',
            onLoad: function(imagecontainer, container) {},
            onError: function(imagecontainer, container) {},
            onStart: function(imagecontainer, container) {},

            /**
              Align the image within its frame. Possible values:

              * **left**
              * **right**
              * **center**
              * **top**
              * **bottom**
              * **top-left**
              * **top-right**
              * **bottom-left**
              * **bottom-right**

              @type String
              @default center
              @since Version 1.2
            */
            align: 'center',
            parent: null,
            hideParentOverflow: true,
            fadeInDuration: 400,
            rescaleOnResize: true,
            didScale: function(firstTime, options) {},
        }
    }
})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:popularCtrl
     * @description
     * # popularCtrl
     * Controller of the app
     */

    angular
        .module('popular')
        .controller('PopularCtrl', Popular);

    Popular.$inject = ['PopularService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Popular(PopularService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.page = 0;
        vm.movies = [];
        var loadMovies = function(pageNumber) {
            PopularService.getMovies(pageNumber).$promise.then(function(res) {
                if (vm.page === res.data.page_number)
                    return;
                vm.page = res.data.page_number;
                for (var i = 0; i < res.data.movies.length; i++) {
                    vm.movies.push(res.data.movies[i]);
                }
                $rootScope.$broadcast('loaded');
            }).catch(function(err) {
                $rootScope.$broadcast('loaded');
            });
        };

        vm.paginate = function() {
            $rootScope.$broadcast('loading');
            loadMovies(vm.page + 1);
        }
    }

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:recentCtrl
     * @description
     * # recentCtrl
     * Controller of the app
     */

    angular
        .module('recent')
        .controller('RecentCtrl', Recent);

    Recent.$inject = ['RecentService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Recent(RecentService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.page = 0;
        vm.movies = [];
        var loadMovies = function(pageNumber) {
            RecentService.getMovies(pageNumber).$promise.then(function(res) {
                if (vm.page === res.data.page_number)
                    return;
                vm.page = res.data.page_number;
                for (var i = 0; i < res.data.movies.length; i++) {
                    vm.movies.push(res.data.movies[i]);
                }
                $rootScope.$broadcast('loaded');
            }).catch(function(err) {
                $rootScope.$broadcast('loaded');
            });
        };

        vm.paginate = function() {
            $rootScope.$broadcast('loading');
            loadMovies(vm.page + 1);
        }
    }

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:trendingCtrl
     * @description
     * # trendingCtrl
     * Controller of the app
     */

    angular
        .module('trending')
        .controller('TrendingCtrl', Trending);

    Trending.$inject = ['TrendingService', '$rootScope'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Trending(TrendingService, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.page = 0;
        vm.movies = [];
        var loadMovies = function(pageNumber) {
            TrendingService.getMovies(pageNumber).$promise.then(function(res) {
            	if(vm.page === res.data.page_number)
            		return;
                vm.page = res.data.page_number;
                for (var i = 0; i < res.data.movies.length; i++) {
                    vm.movies.push(res.data.movies[i]);
                }
            	$rootScope.$broadcast('loaded');
            }).catch(function(err){
            	$rootScope.$broadcast('loaded');
            });
        };

        vm.paginate = function() {
        	$rootScope.$broadcast('loading');
            loadMovies(vm.page + 1);
        }
    }
})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:SearchService
     * @description
     * # popularService
     * Service of the app
     */

    angular
        .module('popular')
        .factory('SearchService', SearchService);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    SearchService.$inject = ['$resource'];

    function SearchService($resource) {
        return {
            search: function(query) {
                return $resource('https://yts.ag/api/v2/list_movies.json').get({ query_term: query });
            }
        };
    }

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:movieService
     * @description
     * # movieService
     * Service of the app
     */

    angular
        .module('movie')
        .factory('MovieService', Movie);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Movie.$inject = ['$resource'];

    function Movie($resource) {
        return {
            getMovie: function(id) {
                return $resource('https://yts.ag/api/v2/movie_details.json').get({ movie_id: id, with_images: 'true', with_cast: 'true' });
            },
            getTMDbInfo: function(id) {
                return $resource('https://api.themoviedb.org/3/find/:id').get({ api_key: 'a21fe922d3bac6654e93450e9a18af1c', id: id, external_source: 'imdb_id' });
            }
        };
    }

})();

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:popularService
     * @description
     * # popularService
     * Service of the app
     */

    angular
        .module('popular')
        .factory('PopularService', PopularService);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    PopularService.$inject = ['$resource'];

    function PopularService($resource) {
        return {
            getMovies: function(pageNumber) {
                return $resource('https://yts.ag/api/v2/list_movies.json').get({ sort_by: 'rating', page: pageNumber, limit: '30' });
            }
        };
    }

})();

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
		.module('recent')
		.factory('RecentService', Recent);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Recent.$inject = ['$resource'];

		function Recent ($resource) {
			return {
				getMovies: function(pageNumber){
					return $resource('https://yts.ag/api/v2/list_movies.json').get({sort_by: 'date_added', page: pageNumber, limit: '30'});
				}
			};
		}

})();

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
                    }
                };
            };

            return backendFactory;
        }]);
})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:trendingService
	 * @description
	 * # trendingService
	 * Service of the app
	 */

  	angular
		.module('trending')
		.factory('TrendingService', Trending);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Trending.$inject = ['$resource'];

		function Trending ($resource) {
			return {
				getMovies: function(pageNumber){
					return $resource('https://yts.ag/api/v2/list_movies.json').get({sort_by: 'download_count', page: pageNumber, limit: '30'});
				}
			};
		}
})();

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
