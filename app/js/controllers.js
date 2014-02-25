'use strict';

/* Controllers */

var worldCupControllers = angular.module('worldCupControllers', []);

worldCupControllers.controller('TeamListCtrl', ['$scope', 'Teams',
  function($scope, Teams) {
    //$scope.teams = Team.query();
    $scope.teams = Teams;
    $scope.orderProp = '-chances';
  }]);

worldCupControllers.controller('TeamDetailCtrl_old', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({teamId: $routeParams.teamId}, function(team) {
      $scope.mainImageUrl = team.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

worldCupControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', '$firebase', 'fbURL',
  function($scope, $routeParams, $firebase, fbURL) {
    var teamUrl = fbURL + $routeParams.teamId + '/details';
    $scope.team = $firebase(new Firebase(teamUrl));
    //$scope.team = $firebase(new Firebase(teamUrl), function(team) {
      //$scope.mainImageUrl = team.images[0];
    //});

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
