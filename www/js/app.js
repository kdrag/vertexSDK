angular.module('vertexSDK', ['ionic','vertexSDK.controllers', 'vertexSDK.services', 'angular-storage', 'ui.router', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/***********************************************/



/***********************************************/





.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
// nexted state app, app.home, app.signUp, app.signIn with assumption that app state gives the upper menu bar
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: 'templates/app.html'
    })
    .state('app.home', {
      url: '/home',
      cache: 'false',
      views: {
        'appContent' :{
          templateUrl: 'templates/home.html',
          controller : 'HomeController'
        }
      }
    })
    .state('app.signUp',{
      url: '/signUp',
      cache: 'false',
      views: {
        'appSignUp':{
          templateUrl: 'templates/signUp.html',
          controller: 'signUpController'
        }
      }
    })
    .state('app.signIn',{
      url: '/signIn',
      cache: 'false',
      views: {
        'appSignIn':{
          templateUrl: 'templates/signIn.html',
          controller: 'signInController',
          controllerAs: 'login'
        }
      }
    })
    .state('app.userInfo',{
      url: '/userInfo',
      cache: 'false',
      views: {
        'appUserInfo':{
          templateUrl: 'templates/userInfo.html',
          controller: 'userInfoController',
          controllerAs: 'userInfo'
        }
      }
    })

    .state('dashboard', {
      url: '/dashboard',
      views:{
        'appDashboard':{
          templateUrl: 'app/templates/dashboard.tmpl.html',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboard'
        }
      }
    })



  $urlRouterProvider.otherwise('app/home');
  //$httpProvider.interceptors.push('APIInterceptor');
});
