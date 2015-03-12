var baseUrl = 'http://7c149e33.ngrok.com';

(function () {
  "use strict";
  angular.module('merlinApp')
  .factory('AuthFactory', function ($http) {
    var _authFactory = {};

    _authFactory.register = function(user) {
    return $http.post(baseUrl + '/api/v1/auth/register', user);
  }

  _authFactory.login = function(user) {
    return $http.post(baseUrl + '/api/v1/auth/login', user);
  }

  return _authFactory;

});
})
