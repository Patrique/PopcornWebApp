angular.module('popcorn').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\n" +
    "    <md-toolbar ng-show=\"!layout.showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>Popcorn</h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"layout.showSearch = !layout.showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"layout.showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\n" +
    "            <md-button ng-click=\"layout.showSearch = !layout.showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-autocomplete ng-disabled=\"false\" md-no-cache=\"false\" md-selected-item=\"layout.selectedItem\" md-search-text-change=\"layout.searchTextChange(layout.searchText)\" md-search-text=\"layout.searchText\" md-selected-item-change=\"layout.selectedItemChange(item)\" md-items=\"item in layout.querySearch(layout.searchText)\" md-item-text=\"item.title\" md-min-length=\"1\" placeholder=\"Search a movie\">\n" +
    "                <md-item-template>\n" +
    "                    <span md-highlight-text=\"layout.searchText\" md-highlight-flags=\"^i\">{{item.title}}</span>\n" +
    "                </md-item-template>\n" +
    "                <md-not-found>\n" +
    "                    No movie found.\n" +
    "                </md-not-found>\n" +
    "            </md-autocomplete>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-subheader>\n" +
    "        <md-nav-bar md-selected-nav-item=\"layout.tabIndex\" nav-bar-aria-label=\"Navigation\">\n" +
    "            <md-nav-item md-nav-sref=\"home.trending\" name=\"home.trending\">Trending</md-nav-item>\n" +
    "            <md-nav-item md-nav-sref=\"home.popular\" name=\"home.popular\">Popular</md-nav-item>\n" +
    "            <md-nav-item md-nav-sref=\"home.recent\" name=\"home.recent\">Recent</md-nav-item>\n" +
    "        </md-nav-bar>\n" +
    "        <md-progress-linear ng-if=\"layout.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "    </md-subheader>\n" +
    "    <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC;\">\n" +
    "        <div ui-view layout=\"column\" flex></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/movie/movie.html',
    "<div layout=\"column\" flex>\n" +
    "    <md-tabs ng-show=\"vm.loaded\" layout=\"column\" flex layout-fill>\n" +
    "        <md-tab label=\"Movie\" layout=\"column\" flex>\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.background}}\" style=\"opacity:0.5;\">\n" +
    "                <div layout=\"column\" layout-align=\"space-around center\">\n" +
    "                    <img style=\"border-radius: 10px;filter: drop-shadow(5px 5px 5px #000);margin-top:40px;\" ng-src=\"{{ vm.movie.medium_cover_image }}\">\n" +
    "                    <div layout=\"column\" flex layout-align=\"space-between center\" style=\"margin-bottom:20px;margin-top:10px;z-index:1;\">\n" +
    "                        <h2 style=\"color:white;text-align: center\">{{ vm.movie.title }}</h2>\n" +
    "                        <md-button class=\"md-raised md-primary\">Play</md-button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        <md-tab label=\"Description\" layout=\"column\" flex>\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.large_screenshot_image1}}\" style=\"opacity:0.5;-webkit-filter: blur(3px);filter: blur(3px);\">\n" +
    "                <div layout=\"column\" layout-align=\"space-around center\" style=\"padding:40px;\">\n" +
    "                    <div layout=\"column\" layout-align=\"start start\" style=\"z-index:1;\">\n" +
    "                        <h3 style=\"color:white;\">Description</h3>\n" +
    "                        <span style=\"color:white;text-align: justify;text-justify: inter-word;\">{{ vm.movie.description_full }}</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"column\" layout-align=\"start start\" style=\"width:100%;z-index:1;\">\n" +
    "                        <h3 style=\"color:white;\">Genres</h3>\n" +
    "                        <span style=\"color:white;text-align: justify;text-justify: inter-word;\">{{ vm.movie.genre }}</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"column\" layout-align=\"start start\" style=\"width: 100%;z-index:1;\">\n" +
    "                        <h3 style=\"color:white;\">MPA Rating</h3>\n" +
    "                        <span style=\"color:white;text-align: justify;text-justify: inter-word;\">{{ vm.movie.mpa_rating }}</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-align=\"center center\" style=\"width:100%;z-index:1;margin-top:15px;\">\n" +
    "                        <span style=\"color:white;\">{{ vm.movie.year }}</span>\n" +
    "                        <span style=\"color:white;margin:0px 10px;\">&#8226;</span>\n" +
    "                        <span style=\"color:white;\">{{ vm.movie.runtime }} min</span>\n" +
    "                    </div>\n" +
    "                    <jk-rating-stars max-rating=\"5\" rating=\"vm.movie.rating\" read-only=\"true\" style=\"z-index:1;margin-top:15px;\">\n" +
    "                    </jk-rating-stars>\n" +
    "                </div>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        <md-tab label=\"Trailer\" layout=\"column\" flex>\n" +
    "            <md-content style=\"background: black;\" layout=\"column\" layout-align=\"center center\" layout-fill>\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.large_screenshot_image2}}\" style=\"opacity:0.5;-webkit-filter: blur(3px);filter: blur(3px);\">\n" +
    "                <div layout=\"column\" layout-align=\"space-around center\" style=\"z-index:1;\">\n" +
    "                    <youtube-video video-id=\"vm.movie.yt_trailer_code\"></youtube-video>\n" +
    "                </div>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        <md-tab label=\"Cast\" layout=\"column\" flex>\n" +
    "            <md-content style=\"background: black;min-height: 100%;\">\n" +
    "\n" +
    "                <img imagefit imagefit-option=\"vm.check\" imageonload imgloaded=\"vm.imageLoaded()\" ng-src=\"{{vm.movie.large_screenshot_image3}}\" style=\"opacity:0.5;-webkit-filter: blur(3px);filter: blur(3px);\">\n" +
    "                <div layout=\"column\" layout-fill layout-align=\"space-around center\" style=\"z-index:1;\">\n" +
    "                    <md-list style=\"margin:40px;\">\n" +
    "                        <md-list-item class=\"md-2-line\" ng-repeat=\"actor in vm.movie.cast\">\n" +
    "                            <md-card md-colors=\"::{backgroundColor: 'default-primary-700'}\" style=\"width:100%;\">\n" +
    "                                <md-card-title>\n" +
    "                                    <md-card-title-media ng-if=\"actor.url_small_image !== undefined\">\n" +
    "                                        <div class=\"md-media-sm card-media\" layout>\n" +
    "                                            <img ng-src=\"{{actor.url_small_image}}\">\n" +
    "                                        </div>\n" +
    "                                    </md-card-title-media>\n" +
    "                                    <md-card-title-text>\n" +
    "                                        <span class=\"md-headline\">{{actor.name}}</span>\n" +
    "                                        <span class=\"md-subhead description\">{{actor.character_name}}</span>\n" +
    "                                    </md-card-title-text>\n" +
    "                                </md-card-title>\n" +
    "                            </md-card>\n" +
    "                        </md-list-item>\n" +
    "                    </md-list>\n" +
    "                </div>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "    </md-tabs>\n" +
    "    <div ng-show=\"!vm.loaded\" layout=\"row\" flex layout-align=\"center center\">\n" +
    "        <md-progress-circular md-diameter=\"96\"></md-progress-circular>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/popular/popular.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id})\">\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\n" +
    "                        <h3 style=\"font-weight:bold;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\n" +
    "                        <md-button class=\"md-icon-button md-48\" aria-label=\"Favorite\">\n" +
    "                            <md-icon md-font-set=\"material-icons\" style=\"color:white;\">favorite</md-icon>\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                </md-grid-tile-footer>\n" +
    "            </md-grid-tile>\n" +
    "        </md-grid-list>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/recent/recent.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id})\">\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\n" +
    "                        <h3 style=\"font-weight:bold;word-break:break-word;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\n" +
    "                        <md-button class=\"md-icon-button md-accent md-48\" aria-label=\"Favorite\">\n" +
    "                            <md-icon md-font-set=\"material-icons\" style=\"color:white;\">favorite</md-icon>\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                </md-grid-tile-footer>\n" +
    "            </md-grid-tile>\n" +
    "        </md-grid-list>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/trending/trending.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"height: 100%;overflow: scroll;\">\n" +
    "    <div infinite-scroll=\"vm.paginate()\" infinite-scroll-parent>\n" +
    "        <md-grid-list md-cols-lg=\"6\" md-cols-xs=\"2\" md-cols-gt-md=\"6\" md-cols-md=\"4\" md-cols-sm=\"2\" md-gutter=\"12px\" md-row-height=\"8:12\">\n" +
    "            <md-grid-tile style=\"cursor: pointer;\" ng-repeat=\"movie in vm.movies\" md-ink-ripple=\"#1565C0\">\n" +
    "                <img ng-src=\"{{movie.large_cover_image}}\" layout-fill class=\"md-card-image\" alt=\"{{ movie.title }}\" ui-sref=\"home.movie({id: movie.id})\">\n" +
    "                <md-grid-tile-footer style=\"background:rgba(0, 0, 0, 0.6) !important;\">\n" +
    "                    <div layout=\"row\" layout-align=\"space-between center\" layout-fill>\n" +
    "                        <h3 style=\"font-weight:bold;word-break:break-word;white-space:nowrap;text-overflow:ellipsis;margin:0px 0px 0px 10px;overflow:hidden;\">{{ movie.title }}</h3>\n" +
    "                        <md-button class=\"md-icon-button md-48\" aria-label=\"Favorite\">\n" +
    "                            <md-icon md-font-set=\"material-icons\" style=\"color:white;\">favorite</md-icon>\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                </md-grid-tile-footer>\n" +
    "            </md-grid-tile>\n" +
    "        </md-grid-list>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
