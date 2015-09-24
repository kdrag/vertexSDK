angular.module('vertexSDK.controllers', ['vertexSDK.services'])


.controller('AppCtrl', function() {

 ionic.Platform.ready(function() {
   navigator.splashscreen.hide();
 })
})


.controller('AppController', ['$scope', '$state','$ionicHistory', '$ionicSideMenuDelegate', '$localstorage', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate, $localstorage) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.appGoBack=function(){
    $ionicHistory.goBack();

  }
}])

.controller('AppSideMenuController', ['$scope', '$state','$ionicHistory', '$ionicSideMenuDelegate', '$localstorage', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate, $localstorage) {


  $scope.checkValue=$localstorage.get('loggedInState');



}])

.controller('loggedOutCtrl', function() {
})

.controller('loggedInCtrl', function() {
})

.controller('refresh_control',function($scope,$interval, $localstorage){

  $interval(function(){
    $scope.checkValue=$localstorage.get('loggedInState');
    },1000);
})


.controller("HomeController", ['$scope', '$state', '$ionicHistory', function($scope, $state, $ionicHistory){


}])

.controller("signOffController", ['$state', '$ionicHistory','$localstorage',function($state, $ionicHistory, $localstorage) {
//not working yet
  $localstorage.set('loggedInState', false);

}])

.controller("settingsCtrl", ['$scope', '$state', '$ionicHistory', '$localstorage',function($scope, $state, $ionicHistory, $localstorage) {

  $scope.settingValues=[];
  $scope.settingsSubmit = function(settingValues){
  }

}])

.controller("signInController",['$rootScope', '$scope', '$http', '$state', '$localstorage', '$ionicHistory', function($rootScope, $scope, $http, $state, $localstorage, $ionicHistory) {

  $scope.data=[];
  $scope.data = {
    "email" : null,
    "userName" : null,
    "password" : null,
    "confirmPassword" : null,
    "submissions" : 0,
    "stateValue" : null
  };

  $scope.signInSubmit = function(data) {
    $scope.data.submissions++;

    $localstorage.set('email', $scope.data.email);
    $localstorage.set('userName', $scope.data.userName);
    $localstorage.set('password', $scope.data.password);
    $localstorage.set('loggedInState', true);
    $scope.data.stateValue=$localstorage.get('loggedInState');


  }


}])




.controller('userInfoController', function ($scope, Event, $ionicLoading){

    $ionicLoading.show({
      template: 'Loading...'
    });
    $scope.event = Event.get();
    $ionicLoading.hide()
});
