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



.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: 'templates/app.html',
      controller: 'AppController'

    })
    .state('app.loggedIn',{
      url: "/loggedIn",
      abstract: true,
      data:{
        requiredLogin: true
      },
      views:{
        'home':{
          controller: 'loggedInCtrl',
          templateUrl: 'templates/loggedIn.html'
        }
      }
    })
    .state('app.loggedOut',{
      url: "/loggedOut",
      abstract: true,
      data:{
        requiredLogin: false
      },
      views:{
        'home':{
          controller: 'loggedOutCtrl',
          templateUrl: 'templates/loggedOut.html'
        }
      }
    })
    .state('app.loggedOut.home', {
      url: '/home',
      views: {
        'loggedOut-placeholder' :{
          templateUrl: 'templates/home.html',
          controller : 'HomeController'
        }
      }
    })
    .state('app.loggedOut.signOff',{
      url: '/signOff',
      cache: 'false',
      views:{
        'loggedOut-placeholder':{
          templateUrl: 'template/home.html',
          controller: 'signOffController'
        }
      }
    })
    .state('app.loggedOut.signIn',{
      url: '/signIn',
      cache: 'false',
      views: {
        'loggedOut-placeholder':{
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
        'loggedIn-placeholder':{
          templateUrl: 'templates/userInfo.html',
          controller: 'userInfoController',
          controllerAs: 'userInfo'
        }
      }
    })
    .state('app.loggedIn.functions',{
      url: '/functions',
      cache: 'false',
      data:{
        requiredLogin: true
      },
      views: {
        'loggedIn-placeholder':{
          templateUrl: 'templates/functions.html',
          controller: 'functionsController',
          controllerAs: 'functions'
        }
      }
    })

    .state('app.loggedIn.single', {
      url: "/functions/:functionlistId",
      views: {
        'loggedIn-placeholder': {
          templateUrl: "templates/functions_sysconflist.html",
          controller: 'functionController'
        }
      }
    })

    .state('app.loggedIn.functions.sysconf',{
      url: '/sysconf',
      cache: 'false',
      data:{
        requiredLogin: true
      },
      views: {
        'loggedIn-placeholder':{
          templateUrl: 'templates/fcn_sysconf.html',
          controller: 'fcn_sysconfController',
          controllerAs: 'functions_sysconf'
        }
      }
    })


    .state('app.loggedOut.settings', {
      url: '/settings',
      views:{
        'loggedOut-placeholder':{
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl',
          controllerAs: 'settings'
        }
      }
    })


  $urlRouterProvider.otherwise('app/loggedOut/home');
});
