'use strict';

/* Services */

var worldCupServices = angular.module('worldCupServices', ['ngResource','firebase']);

worldCupServices.factory('Team', ['$resource',
  function($resource){
    return $resource('teams/:teamId.json', {}, {
      query: {method:'GET', params:{teamId:'teams'}, isArray:true}
    });
  }]);

worldCupServices.value('fbURL', 'https://sizzling-fire-7612.firebaseio.com/')
 
worldCupServices.factory('Teams', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
});