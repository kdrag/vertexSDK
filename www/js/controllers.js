angular.module('vertexSDK.controllers', [])

//Vertex RESTful API
/*
.controller('VertexApiController', function($scope, $http){
   $scope.getEvent=function(){
    $http.get("http://localhost:9000/event", {params: {"user":"password",
                                                       .success(function(data){
             $scope.id = data.id;
             $scope.eventId = data.eventId;
             $scope.dtStart = data.dtStart;
             $scope.duration = data.duration;
           })
           .error(function(data){
               alert("Server Error");
           });
       }})
   };
})
*/
.controller('AppCtrl', function() {

 ionic.Platform.ready(function() {
   navigator.splashscreen.hide();
 })
})


.controller('AppController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})


.controller("HomeController", function($scope) {

})

.controller("SideMenuController", function($scope) {

  $scope.data = {
    items : []
  };

  for(var i = 0; i < 5; i++) {
    $scope.data.items.push({
      id : i,
      label : "Item " + i
    })
  }

})

.directive("ionCart", function() {
  return {
    restrict : "E",
    templateUrl : "templates/ionCart.html"
  }
})

.directive("ionPurchase", function() {
  return {
    restrict : "E",
    templateUrl : "templates/content.html"
  }
})
