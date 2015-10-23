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
      url: '/:id',
      cache: 'false',
      data:{
        requiredLogin: true
      }
      ,
      views:{
        'loggedIn-placeholder':{
          templateUrl: 'templates/functionSecondary.html',
          controller: 'functionControllerSecondary'
        }
      }
    })

// view based routing is not working; URL changes but not the views / html; carrying over secondary view still

    .state('app.loggedIn.function', {
      url: '/function',
      abstract: true,
      views: {
        'functions' :{
          templateUrl: 'templates/function.html',
          controller : 'functionController'
        }
      }
    })


    .state('app.loggedIn.function.functionSys',{
      url: "/functionSys",
      data:{
        requiredLogin: true
      },
      views:{
        'function-placeholder':{
          controller: 'functionSysController',
          templateUrl: 'templates/functionSys.html',
          controllerAs: 'functionSys'
        }
      }
    })


    .state('app.loggedIn.function.single', {
      url: '/:id',
      cache: 'false',
      data:{
        requiredLogin: true
      }
      ,
      views:{
        'function-placeholder':{
          templateUrl: 'templates/functionTertiary.html',
          controller: 'functionControllerTertiary'
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
