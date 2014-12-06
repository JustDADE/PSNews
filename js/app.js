var psnApp = angular.module('psnApp', ['ngResource', 'angularMoment', 'ngCookies' ,'ui.router']);

psnApp.controller('homepage', function($scope, $http) {
  $http.get('/PS/include/get_games.php').then(function(data) {
    $scope.gameslist = data.data;
  });
});

psnApp.controller('gamesList', function($scope, $http) {
  $scope.showInfo = false;

  $http.get('/PS/include/get_games.php').then(function(data) {
    $scope.gamesList = data.data;
  });

  $scope.searchFor = function(title) {
    $http({
      url: '/PS/include/search_game.php',
      method: 'GET',
      params: { title: title }
    }).then(function(data) {
      $scope.gamesList = data.data;
    });
  }

});

psnApp.controller('recentlyReleased', function($scope, $http) {
  $http({
    url: '/PS/include/home_games.php',
    method: 'GET',
    params: { status: 'recent' }
  }).then(function(data) {
    $scope.recent = data.data;
  });
});

psnApp.controller('comingSoon', function($scope, $http) {
  $http({
    url:'/PS/include/home_games.php',
    method: 'GET',
    params: { status: 'comingsoon' }
  }).then(function(data) {
    $scope.comingsoon = data.data;
  });
});


psnApp.filter('convertDate', function() {
  return function(date) {

    if (moment(date).format('YYYY-MM-DD') != 'Invalid date') {
      var newDate = '';

      var diffYears = moment(date).diff(moment(), 'years');
      var diffMonths = moment(date).diff(moment(), 'months');
      var diffDays = moment(date).diff(moment(), 'days');

      if (diffYears != 0) {
        newDate = Math.abs(diffYears)+'y ';
      }
      if (diffMonths != 0) {
        newDate+= Math.abs(diffMonths)+'m ';
      }
      if (diffDays != 0) {
        days = Math.abs(diffDays);
        newDate+= Math.abs(diffDays)+'d';
      }
    } else {
      var split = date.split('-');
      //  0   1  2
      // 2015-00-00

      var year;
      var month;
      var day;

      if (split[0] != '0000') {
        year = split[0];
        if (split[1] != '00') {
          month = split[1];
        } else {
          month = 12;
        }

        if (split[2] != '00') {
          day = split[2];
        } else {
          day = 31;
        }

        var dt = year+'-'+month+'-'+day;

        var diffYears = moment(dt).diff(moment(), 'years');
        var diffMonths = moment(dt).diff(moment().add(diffYears, 'year'), 'months');
        var diffDays = moment(dt).diff(moment().add(diffYears, 'year'), 'days') + 1;

        if (diffYears != 0) {
          newDate = diffYears+'y ';
        }
        if (diffMonths != 0) {
          newDate+= diffMonths+'m ';
        }
        if (diffDays != 0) {
          days = diffDays;
          newDate+= diffDays+'d';
        }
      } else {
        newDate = 'TBA';
      }
    }
    return newDate;
  }
});
