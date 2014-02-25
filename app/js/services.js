'use strict';

/* Services */

var worldCupServices = angular.module('worldCupServices', ['ngResource']);

worldCupServices.factory('Team', ['$resource',
  function($resource){
    return $resource('teams/:teamId.json', {}, {
      query: {method:'GET', params:{teamId:'teams'}, isArray:true}
    });
  }]);
