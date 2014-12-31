psnApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('Landing', {
      url: '',
      templateUrl: 'render/home.html',
      controller: 'homepage'
    })
    .state('Home', {
      url: '/home',
      templateUrl: 'render/home.html',
      controller: 'homepage'
    })
    .state('GamesList', {
      url: '/gameslist',
      templateUrl: 'render/games_list.html',
      controller: 'gamesList'
    })
    .state('Discounts', {
      url: '/discounts',
      templateUrl: 'render/discounts.html',
      controller: 'homepage'
    })
    .state('IGC', {
      url: '/igc',
      templateUrl: 'render/psplus.html',
      controller: 'psplus'
    })
    .state('About', {
      url: '/about',
      templateUrl: 'render/about.html',
      controller: 'about'
    });
});
