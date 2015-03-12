(function() {
angular.module('merlinApp')

.controller('Parentcontroller', function ($scope, $rootScope, $location, AuthFactory, SessionFactory) {
  var parentCtrl = this;

    $scope.login = {
      username: '',
      password: ''
    };

    $scope.loginUser = function() {
      $rootScope.showLoading("Authenticating..");
      AuthFactory.login($scope.login).success(function(data) {
        SessionFactory.createSession(data.user);
        $location.path('/home');
        $rootScope.hideLoading();
      }).error(function(data) {
        if (data.status == 400) {
          $rootScope.hideLoading();
          $rootScope.toast('Invalid Credentials');
        }
      });
    };


})
})();
