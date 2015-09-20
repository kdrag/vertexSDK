angular.module('vertexSDK.controllers', ['vertexSDK.services'])


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

.controller("signInController", function($scope, $http, $state, $localstorage) {
//.controller("signInController", function($scope, $rootScope, $http, $state, LoginService, SignInService, UserService) {

  $localstorage.set('loggedInState', 'hello');
  console.log($localstorage.get('loggedInState'));




//  APIInterceptor code related addition; test getUser, specifically NOT a sign in function but just an API get...purely for TEST purpose here
/*
  var login = this;

      function getUser(user) {
          LoginService.login(user)
              .then(function(response) {
                  user.access_token = response.data.id;
                  UserService.setCurrentUser(user);
                  $rootScope.$broadcast('authorized');
                  $state.go('dashboard');
              });
      }

      function register(user) {
          LoginService.register(user)
              .then(function(response) {
                  login(user);
              });
      }

      function submit(user) {
          login.newUser ? register(user) : signIn(user);
      }

      login.newUser = false;
      login.submit = submit;


  $http.defaults.headers.common = 'Content-Type: application/json';
  $http.defaults.headers.common = 'Authorization: Basic YWRtaW46YWRtaW4=';


  $scope.getUser=function(){
    alert("getUser");

    //$scope.dataLoading = true;

    $http.get("http://localhost:9000/user")
    .success(function(data) {
            $scope.userName = data.userName;
            $scope.lastname = data.lastname;
            $scope.userName = data.userName;
            $scope.role     = data.role;
            $scope.givenName= data.givenName;
            $scope.surname  = data.surname;
            $scope.email    = data.email;
            $scope.sendEmail= data.sendEmail;
            $scope.apiUser  = data.apiUser;
            $scope.gatewayTimeout= data.gatewayTimeout;
            $scope.phoneticSurname= data.phoneticSurname;
            $scope.langPref = data.langPref;
            $scope.emailBodyFormatPref= data.emailBodyFormatPref;
          })
          .error(function(data) {
            alert("ERROR");
          })
       }
*/
})

//.controller("userInfoController", ['$scope', '$http',function($scope, $http) {



.controller('userInfoController', function ($scope, Event){
    $scope.event = Event.get();
    console.log($scope.event.title)
})


.controller("userInfoControllerOld", ['$scope', '$http','$localstorage', function($scope, $http, $localstorage) {


//alert("at userInfoController");

//var local=this;
//var response;

// create empty JSON object "data" as empty array

//  $scope.data = {
//    items : []
//  };
// fill the data[] object array with information; this is referenced in userInfo.html as data.items, with each value in the data[] referred to individually by item.label


 $scope.getUser=function(){
//   GetUserService.getUser()
//    .then(function(response){
      for (var i=0; i < 3; i++){
          $scope.data.items.pop()
      };
      alert("About to call GET");

      $http.defaults.headers.common.Authorization = 'Basic ' + 'VGVzdE9wZXJhdG9yOnRlc3RvcGVyYXRvcg==';
      //       "proxyUrl": "jsonplaceholder.typicode.com/posts/1"

      //$http.get({url:'http://jsonplaceholder.typicode.com/posts/1', headers: { 'Content-Type': 'application/json; charset=UTF-8'}}).then.alert("done");
      $http.get({url:'http://localhost:8100/event', headers: { 'Content-Type': 'application/json; charset=UTF-8'}}).then.alert("done");

      console.log('getting localstorage ' + $localstorage.get('loggedInState'));


/*
      GetUserService.getUser().then(function(response){
        alert('response: '+ response);
        local.userName=response.userName;
        local.givenName=response.givenName;
        local.surname=response.surname;

      });
*/

      $scope.data.items.push(
        {
          id : 1,
          label : "user: " + local.userName
        },
        {
          id : 2,
          label : "given name: " + local.givenName
        },
        {
          id : 3,
          label : "surname: " + local.surname
        }
      )
 };




//  APIInterceptor code related addition; test getUser, specifically NOT a sign in function but just an API get...purely for TEST purpose here
/*
  var login = this;

      function getUser(user) {
          GetUserService.login(user)
              .then(function(response) {
                  user.access_token = response.data.id;
                  UserService.setCurrentUser(user);
                  $rootScope.$broadcast('authorized');
                  $state.go('dashboard');
              });
      }

      function register(user) {
          LoginService.register(user)
              .then(function(response) {
                  login(user);
              });
      }

      function submit(user) {
          login.newUser ? register(user) : signIn(user);
      }

      login.newUser = false;
      login.submit = submit;


  $http.defaults.headers.common = 'Content-Type: application/json';
  $http.defaults.headers.common = 'Authorization: Basic YWRtaW46YWRtaW4=';


  $scope.getUser=function(){
    alert("getUser");

    //$scope.dataLoading = true;

    $http.get("http://localhost:9000/user")
    .success(function(data) {
            $scope.userName = data.userName;
            $scope.lastname = data.lastname;
            $scope.userName = data.userName;
            $scope.role     = data.role;
            $scope.givenName= data.givenName;
            $scope.surname  = data.surname;
            $scope.email    = data.email;
            $scope.sendEmail= data.sendEmail;
            $scope.apiUser  = data.apiUser;
            $scope.gatewayTimeout= data.gatewayTimeout;
            $scope.phoneticSurname= data.phoneticSurname;
            $scope.langPref = data.langPref;
            $scope.emailBodyFormatPref= data.emailBodyFormatPref;
          })
          .error(function(data) {
            alert("ERROR");
          })
       }
*/
}])



/*
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

 */

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
