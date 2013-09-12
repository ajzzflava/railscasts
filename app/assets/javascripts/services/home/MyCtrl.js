window.App = angular.module('AngularCasts', ['ngResource']);
App.factory('Screencast', function($resource) {
  return $resource('/api/screencasts/:id', { id: '@id' });
});
