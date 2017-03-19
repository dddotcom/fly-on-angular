console.log("app.js is running");

angular.module("FlyApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/404');

  $stateProvider.state('home', {
    url: "/",
    templateUrl: "app/views/planes.html",
    controller: "PlanesCtrl"
  })
  .state('create', {
    url: "/new",
    templateUrl: "app/views/new.html",
    controller: "NewCtrl"
  })
  .state('plane', {
    url: "/plane/:id",
    templateUrl: "app/views/details.html",
    controller: "DetailCtrl"
  })
  .state('edit', {
    url: "/plane/edit/:id",
    templateUrl: "app/views/edit.html",
    controller: "DetailCtrl"
  })
  .state("404", {
    url:"/404",
    templateUrl: "app/views/404.html"
  });

  $locationProvider.html5Mode(true);

}]);
