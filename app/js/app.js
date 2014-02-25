'use strict';

/* App Module */

var worldCupApp = angular.module('worldCupApp', [
  'ngRoute',
  'worldCupAnimations',

  'worldCupControllers',
  'worldCupFilters',
  'worldCupServices'
]);

worldCupApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/teams/:teamId', {
        templateUrl: 'partials/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      otherwise({
        redirectTo: '/teams'
      });
  }]);
