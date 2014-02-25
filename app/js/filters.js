'use strict';

/* Filters */

angular.module('worldCupFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
