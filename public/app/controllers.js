angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, planesAPI){
  $scope.title = "Look at all the Kill la Kill characters!";
  $scope.planes = [];
  $scope.searchTerm = '';

  planesAPI.getPlanes().then(function success(response){
    $scope.planes = response.data;
  }, function error(err){
    console.log("Error with planesAPI.getPlanes()", err);
  });

}])
.controller("DetailCtrl", ["$scope", "$stateParams", "$location", "PlanesAPI", function($scope, $stateParams, $location, planesAPI){
  $scope.plane = {};
  planesAPI.getPlane($stateParams.id).then(function success(response){
    console.log("success", response);
    $scope.plane = response.data;
  }, function error(err){
    console.log("Error with planesAPI.getPlane()", err);
  });

  $scope.deletePlane = function(){
    planesAPI.deletePlane($stateParams.id).then(function success(response){
      console.log("success", response);
      $location.path('/');
    }, function error(err){
      console.log("Error with planesAPI.deletePlane()", err);
    });
  };

  $scope.updatePlane = function(){
    planesAPI.updatePlane($scope.plane).then(function success(response){
      console.log("success", response);
      $location.path('/plane/' + $scope.plane._id);
    }, function error(err){
      console.log("Error with planesAPI.updatePlane()", err);
    });
  };

}])
.controller("NewCtrl", ["$scope", "$location", "PlanesAPI", function($scope, $location, planesAPI){
  $scope.plane = {
    name: '',
    description: '',
    age: '',
    picture: ''
  };
$scope.addPlane = function(){
    console.log($scope.plane);
    planesAPI.addPlane($scope.plane).then(function success(response){
      console.log("success", response);
      $location.path('/');
    }, function error(err){
      console.log("Error with planesAPI.addPlane()", err);
    });
  };

}])
.filter("fixgrammar", function(){
  return function(input){
    if(input == 1){
      return "1 engine";
    } else {
      return input + " engines";
    }
  };
});
