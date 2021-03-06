'use strict';

angular.module('nite-out.auth', ['ui.router'/*, 'ngMorph'*/])

// Define our states for ui.router
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('login' , {
      url: '/login',
      templateUrl: 'app/auth/loginPage.html',
      controller: 'AuthController'
    })
    .state('signup' , {
      url: '/signup',
      templateUrl: 'app/auth/signupPage.html',
      controller: 'AuthController'
    });
}])

<<<<<<< HEAD
/////////////////////////////////////////////////
// Controllers for login and signup using ngMorph
/////////////////////////////////////////////////

/*.controller('LoginController', function($scope) {
  $scope.login = {
    trigger: 'click',
    closeEl: '.close-x',
    modal: {
      templateUrl: 'app/auth/loginPage.html',
      position: {
        top: 50%,
        left: 50%
      },
      fade: false
    }
  }
});

.controller('SignupController', function($scope) {
  $scope.signup = {
    trigger: 'click',
    closeEl: '.close-x',
    modal: {
      templateUrl: 'app/auth/signupPage.html',
      position: {
        top: 50%,
        left: 50%
      },
      fade: false
    }
  }
});*/

.controller('AuthController', ['$scope', '$state', 'AuthRequests', function($scope, $state, AuthRequests) {
  
=======
.controller('AuthController', ['$scope', '$state', 'AuthRequests', '$window', 'Main', function($scope, $state, AuthRequests, $window, Main) {
  console.log("AuthRequests: ", AuthRequests);
>>>>>>> 57ffc12e64ca3693642c128b555d5443f069ea01
  // We handle which dialog to display here, based on which button is clicked.
  $scope.loginShown = false;
  $scope.signupShown = false;
  
  // Login button clicked, display the login dialog
  $scope.toggleLogin = function() {
    $scope.loginShown = !$scope.loginShown;
  };
  
  // Signup button clicked, display the signup dialog.  
  $scope.toggleSignup = function() {
    $scope.signupShown = !$scope.signupShown;
  };

  // Here we handle passing data to the server, all business logic is handled in
  // AuthRequests service.
  $scope.userInfo = {};
  function login ()  {
    $window.localStorage.getItem('token') ? $scope.loginStatus = true : $scope.loginStatus = false;
  }
  login();

  // $scope.loginStatus = $window.localStorage.getItem('token');
  // console.log("if: ", ($scope.loginStatus))

  $scope.postSignupData = function(data) {
    AuthRequests.signup(data);
    login();
    // $scope.loginStatus = $window.localStorage.getItem('token');
  };

  $scope.getLoginData = function(data) {
    console.log("data: ", data);
    // console.log("data: ", data);
    AuthRequests.userLogin(data);
    login();
    // $window.localStorage.getItem('token') ? $scope.loginStatus = true : $scope.loginStatus = false;
    $scope.loginStatus = true;
    Main.user = data.username;
    // Main.user = $window.localStorage.getItem('user');
  };

  $scope.signout = function() {
    AuthRequests.signout();
    console.log('deleted: ', $window.localStorage.getItem('token'))
    $window.localStorage.getItem('token') ? $scope.loginStatus = true : $scope.loginStatus = false;
  };
}]);

