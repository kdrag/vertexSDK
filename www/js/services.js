angular.module('vertexSDK.services',['angular-storage', 'ngResource'])
//.constant('ENDPOINT_URI', 'http://vtx00.wgn.jp/')
//.constant('ENDPOINT_URI', 'http://localhost:9000/')
.constant('ENDPOINT_URI', 'http://192.168.1.128:9000/')

.constant('TESTAUTH','YWRtaW46YWRtaW4=')

/*
.factory('UserService', function(store) {
	// use these services to set the client to the signed-In user
    var service = this,
        currentUser = null;

    service.setCurrentUser = function(user) {
        currentUser = user;
        store.set('user', user);
        return currentUser;
    };

    service.getCurrentUser = function() {
        if (!currentUser) {
            currentUser = store.get('user');
        }
        return currentUser;
    };
})

.factory('APIInterceptor', function($rootScope, UserService) {
    var service = this;

    service.request = function(config) {
        var currentUser = UserService.getCurrentUser(),
            access_token = currentUser ? currentUser.access_token : null;

        if (access_token) {
            config.headers.authorization = access_token;
        }
        return config;
    };

		service.responseError = function(response) {
        if (response.status === 401) {
            $rootScope.$broadcast('unauthorized');
        }
        return response;
		};
})
*/
.factory('GetUserService', function($http, ENDPOINT_URI, TESTAUTH) {
       console.log('at GetUserService');
       var service = this,
					 path = 'event';

			 service.getUrl = function() {
					 return ENDPOINT_URI + path;
			 }

       service.constantValue="check";

			 service.getUser = function() {
					 //return $http.get(getUrl()); // no parameters
          alert('at getUser');
          $http.defaults.headers.common.Authorization = "Basic " + TESTAUTH;
					return $http.get(getUrl());
		};
})

.factory('Event', function ($resource, $http){
  return $resource('http://jsonplaceholder.typicode.com/posts/1');
  //$http.defaults.headers.common.Authorization = 'Basic ' + 'YWRtaW46YWRtaW4=';
  //return $resource('http://vtx00.wgn.jp/event/Test00');

})

/*
.service('LoginService', function($http, ENDPOINT_URI) {
			 var service = this,
					 path = 'user';

			 function getUrl() {
					 return ENDPOINT_URI + path;
			 }

			 function getLogUrl(action) {
					 return getUrl() + action;
			 }

			 service.login = function(credentials) {
					 return $http.post(getLogUrl('login'), credentials);
			 };

			 service.logout = function() {
					 return $http.post(getLogUrl('logout'));
			 };

			 service.register = function(user) {
					 return $http.post(getUrl(), user);
			 };
	 })

	 */

	 ;
