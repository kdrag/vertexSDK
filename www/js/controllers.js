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

.controller("signInController", function($scope, $rootScope, $http, $state, GetUserService, UserService) {
//.controller("signInController", function($scope, $rootScope, $http, $state, LoginService, SignInService, UserService) {

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

.controller("userInfoController", ['$scope','$rootScope', '$http', '$state', function($scope, $rootScope, $http, $state, GetUserService, UserService) {
  console.log("at userInfoController");

var local=this;


// create empty JSON object "data" as empty array

  $scope.data = {
    items : []
  };
// fill the data[] object array with information; this is referenced in userInfo.html as data.items, with each value in the data[] referred to individually by item.label

 $scope.getUser=function(){
//   GetUserService.getUser()
//    .then(function(response){
      for (var i=0; i < 3; i++){
          $scope.data.items.pop()
      };

      GetUserService.getUser().then(function(response){
        local.userName=response.userName;
        local.givenName=response.givenName;
        local.surname=response.surname;

      });
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
//    }
//  );
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
/*
.directive("ionCart", function() {
  return {
    restrict : "E",
    templateUrl : "templates/ionCart.html"
  }
})
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
