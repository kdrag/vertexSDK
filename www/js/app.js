angular.module('vertexSDK', ['ionic','vertexSDK.controllers', 'vertexSDK.services', 'angular-storage', 'ui.router', 'ngResource'])

.run(function($ionicPlatform, $localstorage) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $localstorage.set('loggedInState', false);
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
      templateUrl: 'templates/app.html',
      data:{
        requireLogin: false
      }
    })
    .state('app.loggedIn',{
      url: "/loggedIn",
      abstract: true,
      templateUrl: 'templates/loggedIn.html',
      data:{
        requiredLogin: true
      }
    })
    .state('app.loggedOut',{
      url: "/loggedOut",
      abstract: true,
      templateUrl: 'templates/loggedOut.html',
      data:{
        requiredLogin: false
      }
    })
    .state('app.loggedOut.home', {
      url: '/home',
      cache: 'false',
      views: {
        'appContent' :{
          templateUrl: 'templates/home.html',
          controller : 'HomeController'
        }
      }
    })
    .state('app.loggedOut.signUp',{
      url: '/signUp',
      cache: 'false',
      views: {
        'appSignUp':{
          templateUrl: 'templates/signUp.html',
          controller: 'signUpController'
        }
      }
    })
    .state('app.loggedOut.signIn',{
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
    .state('app.loggedIn.userInfo',{
      url: '/userInfo',
      cache: 'false',
      data:{
        requiredLogin: true
      },
      views: {
        'UserInfo':{
          templateUrl: 'templates/userInfo.html',
          controller: 'userInfoController',
          controllerAs: 'userInfo'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views:{
        'Settings':{
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl',
          controllerAs: 'settings'
        }
      }
    })



  $urlRouterProvider.otherwise('app/loggedOut/home');
  //$httpProvider.interceptors.push('APIInterceptor');
});
