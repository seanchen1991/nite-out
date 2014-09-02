'use strict';

angular.module('nite-out.movies', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main.movies', {
      url: '/movies',
      templateUrl: 'app/movies/movies.html',
      controller: 'MoviesController'
    });
}])

.controller('MoviesController', ['$scope', 'Movies', function($scope, Movies){
  $scope.theaters = Movies.theaters;

<<<<<<< HEAD
  Movies.getTheaters(94102);
}]);
=======
  $scope.toShowtimes = function() {
    $state.go('main.showtimes');
  };

  Movies.getTheaters(94518);
});
>>>>>>> minor changes, trying to figure out why the ui-router is not working

//in order for this to switch to a different view we will need to
//register this view with the ui.router (app.js)

//click on a theater, on-click="function that changes state"

//that function should be here

//the function should (via state) load a new view containing all the 
//showtimes
