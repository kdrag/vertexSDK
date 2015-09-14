// constat value for ENDPOINT_URI needs to be made dynamic


angular.module('vertexSDK.services',['angular-storage'])
//.constant('ENDPOINT_URI', 'http://vtx00.wgn.jp/')
.constant('ENDPOINT_URI', 'http://localhost:9000/')
.constant('test_code64','YWRtaW46YWRtaW4=' )
.service('UserService', function(store) {


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

.service('APIInterceptor', function($rootScope, UserService) {
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

.service('GetUserService', function($http, ENDPOINT_URI) {
			 var service = this,
					 path = 'user';

			 function getUrl() {
					 return ENDPOINT_URI + path;
			 }

			 service.getUser = function() {
					 //return $http.get(getUrl()); // no parameters
//					 return $http.get(getUrl(), {
//    		 			headers: {'Authorization': 'Basic YWRtaW46YWRtaW4=', 'Content-Type': 'application/json'}
//						});
							console.log('http get ');
							console.log($http.get({method: 'GET', url: getUrl(),
	      		 		 headers: {'Authorization': 'Basic YWRtaW46YWRtaW4=', 'Content-Type': 'application/json'}
	  					 }));
					 return $http.get({method: 'GET', url: getUrl(),
     		 		 headers: {'Authorization': 'Basic YWRtaW46YWRtaW4=', 'Content-Type': 'application/json'}
 					 });

			 };
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
