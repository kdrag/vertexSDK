angular.module('vertexSDK', ['ionic','vertexSDK.controllers'])

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


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: 'templates/app.html'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'appContent' :{
          templateUrl: 'templates/home.html',
          controller : 'HomeController'
        }
      }
    });

  $urlRouterProvider.otherwise('app/home');
})
