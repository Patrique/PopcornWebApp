angular.module('popcorn').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\r" +
    "\n" +
    "    <md-toolbar ng-show=\"!layout.showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <md-button hide-gt-md aria-label=\"Menu\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <h3>Popcorn</h3>\r" +
    "\n" +
    "            <span flex></span>\r" +
    "\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"layout.showSearch = !layout.showSearch\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"layout.showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\r" +
    "\n" +
    "            <md-button ng-click=\"layout.showSearch = !layout.showSearch\" aria-label=\"Back\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <md-autocomplete ng-disabled=\"false\" md-no-cache=\"false\" md-selected-item=\"layout.selectedItem\" md-search-text-change=\"layout.searchTextChange(layout.searchText)\" md-search-text=\"layout.searchText\" md-selected-item-change=\"layout.selectedItemChange(item)\" md-items=\"item in layout.querySearch(layout.searchText)\" md-item-text=\"item.title\" md-min-length=\"1\" placeholder=\"Search a movie\">\r" +
    "\n" +
    "                <md-item-template>\r" +
    "\n" +
    "                    <span md-highlight-text=\"layout.searchText\" md-highlight-flags=\"^i\">{{item.title}}</span>\r" +
    "\n" +
    "                </md-item-template>\r" +
    "\n" +
    "                <md-not-found>\r" +
    "\n" +
    "                    No movie found.\r" +
    "\n" +
    "                </md-not-found>\r" +
    "\n" +
    "            </md-autocomplete>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <md-subheader>\r" +
    "\n" +
    "        <md-nav-bar md-selected-nav-item=\"layout.tabIndex\" nav-bar-aria-label=\"Navigation\">\r" +
    "\n" +
    "            <md-nav-item md-nav-sref=\"home.trending\" name=\"home.trending\">Trending</md-nav-item>\r" +
    "\n" +
    "            <md-nav-item md-nav-sref=\"home.popular\" name=\"home.popular\">Popular</md-nav-item>\r" +
    "\n" +
    "            <md-nav-item md-nav-sref=\"home.recent\" name=\"home.recent\">Recent</md-nav-item>\r" +
    "\n" +
    "        </md-nav-bar>\r" +
    "\n" +
    "        <md-progress-linear ng-if=\"layout.loading\" md-mode=\"indeterminate\"></md-progress-linear>\r" +
    "\n" +
    "    </md-subheader>\r" +
    "\n" +
    "    <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC;\">\r" +
    "\n" +
    "        <div ui-view layout=\"column\" flex></div>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/login/login.html',
    "<div layout=\"column\" layout-align=\"space-around center\" style=\"background-color: #3F51B5;\" layout-fill>\r" +
    "\n" +
    "    <div layout=\"column\" layout-align=\"center center\">\r" +
    "\n" +
    "        <img src=\"/app/assets/images/logo.png\" height=\"97\" width=\"97\">\r" +
    "\n" +
    "        <h2 class=\"md-display-1\" style=\"color:white;\">Popcorn</h2>\r" +
    "\n" +
    "        <h3 class=\"md-subhead\" style=\"color:white;margin: 0;\">Watch any movie instantly</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div layout=\"column\" layout-align=\"center center\">\r" +
    "\n" +
    "        <md-button class=\"md-raised\" style=\"background-color:#3b5998;color:white;width:100%;\" ng-click=\"vm.authenticate('facebook')\">\r" +
    "\n" +
    "            <span layout=\"row\" layout-align=\"space-between center\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"/app/assets/images/facebook.svg\" style=\"color:white;margin:0;\"></md-icon>\r" +
    "\n" +
    "            Sign in with Facebook\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </md-button>\r" +
    "\n" +
    "        <md-button class=\"md-raised\" style=\"background-color:#d34836;color:white;width:100%;\" ng-click=\"vm.authenticate('google')\">\r" +
    "\n" +
    "            <span layout=\"row\" layout-align=\"space-between center\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"/app/assets/images/google.svg\" style=\"color:white;margin:0;\"></md-icon>\r" +
    "\n" +
    "            Sign in with Google</span></md-button>\r" +
    "\n" +
    "        <md-button class=\"md-raised\" style=\"background-color:#4099FF;color:white;width:100%;\" ng-click=\"vm.authenticate('twitter')\">\r" +
    "\n" +
    "            <span layout=\"row\" layout-align=\"space-between center\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"/app/assets/images/twitter.svg\" style=\"color:white;margin:0;\"></md-icon>\r" +
    "\n" +
    "            Sign in with Twitter</span></md-button>\r" +
    "\n" +
    "        <md-button class=\"md-raised\" style=\"background-color:#00a1f1;color:white;width:100%;\" ng-click=\"vm.authenticate('microsoftaccount')\">\r" +
    "\n" +
    "            <span layout=\"row\" layout-align=\"space-between center\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"/app/assets/images/microsoft.svg\" style=\"color:white;margin:0;\"></md-icon>\r" +
    "\n" +
    "            Sign in with Windows Live</span></md-button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/movie/movie.html',
    "<div layout=\"column\" flex>\r" +
    "\n" +
    "    <md-tabs ng-show=\"vm.loaded\" layout=\"column\" flex layout-fill>\r" +
    "\n" +
    "        <md-tab label=\"Movie\" layout=\"column\" flex>\r" +
    "\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\r" +
    "\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.background}}\" style=\"opacity:0.5;\">\r" +
    "\n" +
    "                <div layout=\"column\" layout-align=\"space-around center\">\r" +
    "\n" +
    "                    <img style=\"border-radius: 10px;filter: drop-shadow(5px 5px 5px #000);margin-top:40px;max-width: 40%;\" ng-src=\"{{ vm.movie.medium_cover_image }}\">\r" +
    "\n" +
    "                    <div layout=\"column\" flex layout-align=\"space-between center\" style=\"margin-bottom:20px;margin-top:10px;z-index:1;\">\r" +
    "\n" +
    "                        <h2 style=\"color:white;text-align: center\">{{ vm.movie.title }}</h2>\r" +
    "\n" +
    "                        <div layout=\"row\" layout-align=\"center center\" style=\"width:100%;z-index:1;\">\r" +
    "\n" +
    "                            <span style=\"color:white;\">{{ vm.movie.year }}</span>\r" +
    "\n" +
    "                            <span style=\"color:white;margin:0px 10px;\">&#8226;</span>\r" +
    "\n" +
    "                            <span style=\"color:white;\">{{ vm.movie.runtime }} min</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <jk-rating-stars max-rating=\"5\" rating=\"vm.movie.rating\" read-only=\"true\" style=\"z-index:1;margin-top:5px;\">\r" +
    "\n" +
    "                        </jk-rating-stars>\r" +
    "\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.goToPlayer(vm.movie)\" style=\"margin-top:15px;\">Play</md-button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </md-tab>\r" +
    "\n" +
    "        <md-tab label=\"Description\" layout=\"column\" flex>\r" +
    "\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\r" +
    "\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.large_screenshot_image1}}\" style=\"opacity:0.5;-webkit-filter: blur(3px);filter: blur(3px);\">\r" +
    "\n" +
    "                <div layout=\"column\" layout-align=\"space-around center\" style=\"padding:40px;\">\r" +
    "\n" +
    "                    <div layout=\"column\" layout-align=\"start center\" style=\"z-index:1;\">\r" +
    "\n" +
    "                        <h3 style=\"color:white;\">Description</h3>\r" +
    "\n" +
    "                        <span style=\"color:white;text-align: justify;text-justify: inter-word;\">{{ vm.movie.description_full }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div layout=\"column\" layout-align=\"start center\" style=\"width:100%;z-index:1;\">\r" +
    "\n" +
    "                        <h3 style=\"color:white;\">Genres</h3>\r" +
    "\n" +
    "                        <span style=\"color:white;text-align: center;\">{{ vm.movie.genre }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div layout=\"column\" layout-align=\"start center\" style=\"width: 100%;z-index:1;\">\r" +
    "\n" +
    "                        <h3 style=\"color:white;\">MPA Rating</h3>\r" +
    "\n" +
    "                        <span style=\"color:white;text-align: center;\">{{ vm.movie.mpa_rating }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </md-tab>\r" +
    "\n" +
    "        <md-tab label=\"Trailer\" layout=\"column\" flex>\r" +
    "\n" +
    "            <md-content class=\"videogular-container\" flex layout-fill layout=\"column\" layout-align=\"center center\">\r" +
    "\n" +
    "                <videogular vg-theme=\"vm.config.theme\">\r" +
    "\n" +
    "                    <vg-media vg-src=\"vm.config.sources\">\r" +
    "\n" +
    "                    </vg-media>\r" +
    "\n" +
    "                    <vg-controls vg-autohide=\"true\" vg-autohide-time=\"2000\">\r" +
    "\n" +
    "                        <vg-play-pause-button></vg-play-pause-button>\r" +
    "\n" +
    "                        <vg-time-display>{{ currentTime | date:'HH:mm:ss':'+0000' }}</vg-time-display>\r" +
    "\n" +
    "                        <vg-scrub-bar>\r" +
    "\n" +
    "                            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r" +
    "\n" +
    "                        </vg-scrub-bar>\r" +
    "\n" +
    "                        <vg-time-display>{{ timeLeft | date:'HH:mm:ss':'+0000' }}</vg-time-display>\r" +
    "\n" +
    "                        <vg-volume>\r" +
    "\n" +
    "                            <vg-mute-button></vg-mute-button>\r" +
    "\n" +
    "                            <vg-volume-bar></vg-volume-bar>\r" +
    "\n" +
    "                        </vg-volume>\r" +
    "\n" +
    "                        <vg-fullscreen-button></vg-fullscreen-button>\r" +
    "\n" +
    "                    </vg-controls>\r" +
    "\n" +
    "                    <vg-overlay-play></vg-overlay-play>\r" +
    "\n" +
    "                    <vg-poster vg-url='vm.config.plugins.poster'></vg-poster>\r" +
    "\n" +
    "                </videogular>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </md-tab>\r" +
    "\n" +
    "        <md-tab label=\"Cast\" layout=\"column\" flex>\r" +
    "\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\r" +
    "\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.large_screenshot_image3}}\" style=\"opacity:0.5;-webkit-filter: blur(3px);filter: blur(3px);\">\r" +
    "\n" +
    "                <div layout=\"column\" layout-fill layout-align=\"space-around center\" style=\"z-index:1;\">\r" +
    "\n" +
    "                    <md-list style=\"margin:40px;\">\r" +
    "\n" +
    "                        <md-list-item class=\"md-2-line\" ng-repeat=\"actor in vm.movie.cast\">\r" +
    "\n" +
    "                            <md-card md-colors=\"::{backgroundColor: 'default-primary-700'}\" style=\"width:100%;\">\r" +
    "\n" +
    "                                <md-card-title>\r" +
    "\n" +
    "                                    <md-card-title-media ng-if=\"actor.url_small_image !== undefined\">\r" +
    "\n" +
    "                                        <div class=\"md-media-sm card-media\" layout>\r" +
    "\n" +
    "                                            <img ng-src=\"{{actor.url_small_image}}\">\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-card-title-media>\r" +
    "\n" +
    "                                    <md-card-title-text>\r" +
    "\n" +
    "                                        <span class=\"md-headline\">{{actor.name}}</span>\r" +
    "\n" +
    "                                        <span class=\"md-subhead description\">{{actor.character_name}}</span>\r" +
    "\n" +
    "                                    </md-card-title-text>\r" +
    "\n" +
    "                                </md-card-title>\r" +
    "\n" +
    "                            </md-card>\r" +
    "\n" +
    "                        </md-list-item>\r" +
    "\n" +
    "                    </md-list>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </md-tab>\r" +
    "\n" +
    "    </md-tabs>\r" +
    "\n" +
    "    <div ng-show=\"!vm.loaded\" layout=\"row\" flex layout-align=\"center center\">\r" +
    "\n" +
    "        <md-progress-circular md-diameter=\"96\"></md-progress-circular>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/player/player.html',
    "<div layout=\"column\" flex>\r" +
    "\n" +
    "    <md-content ng-if=\"!vm.playerReady\" style=\"background: black;min-height: 100%;\" flex layout-fill layout=\"column\" layout-align=\"center center\" ng-show=\"vm.loaded\">\r" +
    "\n" +
    "        <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.background}}\" style=\"opacity:0.3;\">\r" +
    "\n" +
    "        <div layout=\"column\" layout-align=\"space-around center\" style=\"padding:40px;width:100%;\">\r" +
    "\n" +
    "            <div layout=\"column\" layout-align=\"center center\" style=\"z-index:1;width:100%;\">\r" +
    "\n" +
    "                <h1 class=\"md-display-3\" style=\"color: white;text-align: center;\">{{ vm.movie.title }}</h1>\r" +
    "\n" +
    "                <h2 class=\"md-display-1\" style=\"color:white;\">Buffering</h2>\r" +
    "\n" +
    "                <md-progress-linear style=\"max-width:50%;\" class=\"md-warn\" md-mode=\"buffer\" value=\"{{ vm.movieBuffer }}\" md-buffer-value=\"{{ vm.serverBuffer }}\"></md-progress-linear>\r" +
    "\n" +
    "                <h3 class=\"md-headline\" style=\"color:white;\">{{ vm.serverBuffer }} %</h3>\r" +
    "\n" +
    "                <md-button class=\"md-accent\" ng-click=\"vm.goPrevious();\">Cancel</md-button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n" +
    "    <div ng-show=\"!vm.loaded\" layout=\"row\" flex layout-align=\"center center\">\r" +
    "\n" +
    "        <md-progress-circular md-diameter=\"96\"></md-progress-circular>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <md-content ng-if=\"vm.playerReady\" class=\"videogular-container\" flex layout-fill layout=\"column\" layout-align=\"center center\" style=\"background-color: black;\">\r" +
    "\n" +
    "        <videogular vg-theme=\"vm.config.theme\" vg-player-ready=\"vm.onPlayerReady($API)\">\r" +
    "\n" +
    "            <vg-media vg-src=\"vm.config.sources\" vg-tracks=\"vm.config.tracks\">\r" +
    "\n" +
    "            </vg-media>\r" +
    "\n" +
    "            <vg-controls vg-autohide=\"true\" vg-autohide-time=\"2000\">\r" +
    "\n" +
    "                <vg-play-pause-button></vg-play-pause-button>\r" +
    "\n" +
    "                <vg-time-display>{{ currentTime | date:'HH:mm:ss':'+0000' }}</vg-time-display>\r" +
    "\n" +
    "                <vg-scrub-bar>\r" +
    "\n" +
    "                    <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r" +
    "\n" +
    "                </vg-scrub-bar>\r" +
    "\n" +
    "                <vg-time-display>{{ timeLeft | date:'HH:mm:ss':'+0000' }}</vg-time-display>\r" +
    "\n" +
    "                <vg-volume>\r" +
    "\n" +
    "                    <vg-mute-button></vg-mute-button>\r" +
    "\n" +
    "                    <vg-volume-bar></vg-volume-bar>\r" +
    "\n" +
    "                </vg-volume>\r" +
    "\n" +
    "                <stop-button></stop-button>\r" +
    "\n" +
    "                <vg-fullscreen-button></vg-fullscreen-button>\r" +
    "\n" +
    "            </vg-controls>\r" +
    "\n" +
    "            <vg-overlay-play></vg-overlay-play>\r" +
    "\n" +
    "            <vg-poster vg-url='vm.config.plugins.poster'></vg-poster>\r" +
    "\n" +
    "        </videogular>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/popular/popular.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\r" +
    "\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\r" +
    "\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\r" +
    "\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\r" +
    "\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id, slug: movie.slug})\">\r" +
    "\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\r" +
    "\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\r" +
    "\n" +
    "                        <h3 style=\"font-weight:bold;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\r" +
    "\n" +
    "                        <md-button ng-click=\"vm.toggleLike(movie)\" class=\"md-icon-button md-48\" aria-label=\"Favorite\">\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like !== true\" style=\"color:white;\">favorite</md-icon>\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like\" style=\"color:red;\">favorite</md-icon>\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-grid-tile-footer>\r" +
    "\n" +
    "            </md-grid-tile>\r" +
    "\n" +
    "        </md-grid-list>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/recent/recent.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\r" +
    "\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\r" +
    "\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\r" +
    "\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\r" +
    "\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id, slug: movie.slug})\">\r" +
    "\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\r" +
    "\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\r" +
    "\n" +
    "                        <h3 style=\"font-weight:bold;word-break:break-word;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\r" +
    "\n" +
    "                        <md-button ng-click=\"vm.toggleLike(movie)\" class=\"md-icon-button md-48\" aria-label=\"Favorite\">\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like !== true\" style=\"color:white;\">favorite</md-icon>\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like\" style=\"color:red;\">favorite</md-icon>\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-grid-tile-footer>\r" +
    "\n" +
    "            </md-grid-tile>\r" +
    "\n" +
    "        </md-grid-list>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/trending/trending.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\r" +
    "\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\r" +
    "\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\r" +
    "\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\r" +
    "\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id, slug: movie.slug})\">\r" +
    "\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\r" +
    "\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\r" +
    "\n" +
    "                        <h3 style=\"font-weight:bold;word-break:break-word;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\r" +
    "\n" +
    "                        <md-button ng-click=\"vm.toggleLike(movie)\" class=\"md-icon-button md-48\" aria-label=\"Favorite\">\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like !== true\" style=\"color:white;\">favorite</md-icon>\r" +
    "\n" +
    "                            <md-icon md-font-set=\"material-icons\" ng-if=\"movie.like\" style=\"color:red;\">favorite</md-icon>\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-grid-tile-footer>\r" +
    "\n" +
    "            </md-grid-tile>\r" +
    "\n" +
    "        </md-grid-list>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
