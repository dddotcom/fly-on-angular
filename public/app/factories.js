angular.module("FlyApp")
.factory("PlanesAPI", ["$http", function($http){
  return {
    getPlanes: function(){
      return $http.get("/api/airplanes");
    },
    getPlane: function(id){
      return $http.get("/api/airplanes/" + id);
    },
    addPlane: function(plane){
      return $http.post("api/airplanes", plane)
      .then(function success(response){
        console.log("successful add!");
        console.log(response);
        return response.data;
      }, function error(err){
        console.log("error!\n" + err);
        return null;
      });
    },
    deletePlane: function(id){
    return $http.delete("api/airplanes/" + id)
      .then(function success(response){
        console.log("successful delete!");
        return response.data;
      }, function error(err){
        console.log("error", err);
        return null;
      });
    },
    updatePlane: function(plane){
      return $http.put("api/airplanes/" + plane._id, plane)
      .then(function success(response){
        console.log("successful update!");
        console.log(response);
        return response.data;
      }, function error(err){
        console.log("error", err);
        return null;
      });

    },

  };
}]);
