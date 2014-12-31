var psnApp = angular.module('psnApp', ['ngResource', 'angularMoment', 'ngCookies' ,'ui.router']);

psnApp.controller('homepage', function($scope, $http) {

  $http.get('/include/get_games.php').then(function(data) {
    $scope.gameslist = data.data;
  });

  $http.get('/include/get_psplus_games.php').then(function(data) {
    $scope.links = data.data.links;
    $scope.date = moment().format('YYYY-MM-DD');
  });

});

psnApp.controller('gamesList', function($scope, $http) {
  $scope.showInfo = false;

  $http.get('/include/get_games.php').then(function(data) {
    $scope.gamesList = data.data;
  });

  $scope.searchFor = function(title) {
    $http({
      url: '/include/search_game.php',
      method: 'GET',
      params: { title: title }
    }).then(function(data) {
      $scope.gamesList = data.data;
    });
  }

});

psnApp.controller('recentlyReleased', function($scope, $http) {
  $http({
    url: '/include/home_games.php',
    method: 'GET',
    params: { status: 'recent' }
  }).then(function(data) {
    $scope.recent = data.data;
  });
});

psnApp.controller('comingSoon', function($scope, $http) {
  $http({
    url:'/include/home_games.php',
    method: 'GET',
    params: { status: 'comingsoon' }
  }).then(function(data) {
    $scope.comingsoon = data.data;
  });
});

psnApp.controller('psplus', function($scope, $http) {
  $http({
    url: '/include/psplus_games.php',
    method: 'GET',
  }).then(function(data) {
    $scope.psplus = data.data;
  });
});

psnApp.filter('getName', function($http) {
  return function(id) {
    $http({
      url: '/include/get_gamebyid.php',
      params: { gameid: id },
      method: 'GET'
    }).then(function(data) {
      return data.data;
    });
  }
})

psnApp.filter('convertDate', function() {
  return function(date) {
    var newDate = 0;

    var mDate = moment(date).format('YYYY-MM-DD');

    if (mDate != 'Invalid date') {
      newDate = moment.duration(moment(mDate).diff(moment(), 'days'), 'days').humanize();
    } else {
      var splitDate = date.split('-');

      var nY = splitDate[0];
      var nM = splitDate[1];
      var nD = splitDate[2];

      if (splitDate[1] == '00') {
        nM = 12;
      }
      if (splitDate[2] == '00') {
        nD = 30;
      }

      if (date[0] == '0000') {
        newDate = 'TBA';
      } else {
        var nDate = moment(nY+'-'+nM+'-'+nD).format('YYYY-MM-DD');
            newDate = moment.duration(moment(nDate).diff(moment(), 'days'), 'days').humanize();
      }
    }
    return newDate;
  }
});
