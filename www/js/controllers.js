angular.module('vertexSDK.controllers', [])


.controller('AppCtrl', function() {

 ionic.Platform.ready(function() {
   navigator.splashscreen.hide();
 })
})


.controller('AppController', ['$scope', '$state','$ionicHistory', '$ionicSideMenuDelegate', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
    console.log("at AppController");
  }
  $scope.appGoBack=function(){
    $ionicHistory.goBack();

  }
}])


.controller("HomeController", ['$scope', '$window', '$location', '$state', function($scope, $window, $location){
  //alert('Home View');
  console.log("at HomeController, hence appContent view");

}])

.controller("signUpController", ['$scope', '$state', '$ionicHistory',function($state, $scope, $ionicHistory) {
  //alert("Sign up View");
  console.log("at signUpController, hence appSignUp view");
  $scope.data = {
      "firstname" : "",
      "lastname" : "",
      "email" : "",
      "password" : "",
      "confirmPassword" : "",
      "submissions" : 0,
      "summary" : ""
    };

    $scope.submit = function() {
      $scope.data.submissions++;
      $scope.data.summary = angular.copy($scope.data.firstname) + " " + angular.copy($scope.data.lastname);
    }
}])

.controller("signInController", ['$scope', function($scope) {

}])


.controller("SideMenuController", ['$scope', function($scope) {

  $scope.data = {
    items : []
  };

  for(var i = 0; i < 5; i++) {
    $scope.data.items.push({
      id : i,
      label : "Item " + i
    })
  }

}])

.directive("ionCart", function() {
  return {
    restrict : "E",
    templateUrl : "templates/ionCart.html"
  }
})

.directive("ionHome", function() {
  return {
    restrict : "E",
    templateUrl : "templates/homeContent.html"
  }
})



.directive("ionSignUp", function() {
  return {
    restrict : "E",
    templateUrl : "templates/signUpHome.html"
  }
})


.directive("ionSignIn", function() {
  return {
    restrict : "E",
    templateUrl : "templates/signInHome.html"
  }
});
