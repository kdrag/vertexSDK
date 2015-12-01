angular.module('vertexSDK.services',['angular-storage', 'ngResource'])




//.constant('ENDPOINT_URI', 'http://localhost:8100/event')
.constant('ENDPOINT_URI', 'http://localhost:8100/')

//use of ngResource- default HTTP methods:
//{ 'get':    {method:'GET'},
//  'save':   {method:'POST'},
//  'query':  {method:'GET', isArray:true},
//  'remove': {method:'DELETE'},
//  'delete': {method:'DELETE'} };
//event API
//usage:POST   $scope.eventlist=serviceEvent.save()
//usage:GET    $scope.eventlist=serviceEvent.get()
//usage:PUT
//usage:DELETE $scope.eventlist=serviceEvent.delete

.service('serviceRest', function($resource,$http){
  var authheader = null;
  var vtxAddress = null;
  var res = null;
  var keyValue = null;
  var mockEvent=[{
                 "id": "5038a84d-7bcb-4ad3-ab1f-f90fc3701585",
                 "eventId": "Test00",
                 "dtStart": "2014-12-16T16:00:00.0000-0800",
                 "marketContext": "http://MarketContext1",
                 "duration": "PT60M",
                 "signals": [
                     {
                         "type": "LEVEL",
                         "intervals": [
                             {
                                 "duration": "PT60M",
                                 "value": "2"
                             }
                         ],
                         "id": "SIG_01",
                         "name": "SIMPLE",
                         "curValue": "0"
                     }
                 ],
                 "cancelled": false,
                 "testEvent": false,
                 "responseRequired": "NEVER",
                 "target": {
                     "resourceIDs": [],
                     "venIDs": []
                 },
                 "participationStatusTs": 1418774090226,
                 "modNumber": 0,
                 "vertex": "7601363e-6cb6-429b-93a4-b3072b217a0c",
                 "endTs": 1418778000000,
                 "startTs": 1418774400000,
                 "drProgram": "5e9bed61-04bf-4b7f-9f26-373bece7f3d6",
                 "rampUpStartTs": 1418774400000,
                 "recoveryEndTs": 1418778000000,
                 "accountParticipationKw": "0",
                 "participationStatus": "optIn",
                 "createdTs": 1418774090216,
                 "_cas": 7
             },
             {
                 "id": "9054ba8f-02dd-402a-84ea-198bd8272dbe",
                 "eventId": "Test01",
                 "dtStart": "2014-12-16T20:20:00.0000-0800",
                 "marketContext": "http://MarketContext1",
                 "duration": "PT60M",
                 "signals": [
                     {
                         "type": "LEVEL",
                         "intervals": [
                             {
                                 "duration": "PT60M",
                                 "value": "2"
                             }
                         ],
                         "id": "SIG_01",
                         "name": "SIMPLE",
                         "curValue": "0"
                     }
                 ],
                 "cancelled": false,
                 "testEvent": false,
                 "responseRequired": "NEVER",
                 "target": {
                     "resourceIDs": [],
                     "venIDs": []
                 },
                 "participationStatusTs": 1418789978904,
                 "modNumber": 0,
                 "vertex": "7601363e-6cb6-429b-93a4-b3072b217a0c",
                 "endTs": 1418793600000,
                 "startTs": 1418790000000,
                 "drProgram": "5e9bed61-04bf-4b7f-9f26-373bece7f3d6",
                 "rampUpStartTs": 1418790000000,
                 "recoveryEndTs": 1418793600000,
                 "accountParticipationKw": "0",
                 "participationStatus": "optIn",
                 "createdTs": 1418789978904,
                 "_cas": 7
             },
             {
                 "id": "b479d53d-957e-4885-8aa7-01a2946fc3e8",
                 "eventId": "Test02",
                 "dtStart": "2014-12-16T23:45:00.0000-0800",
                 "marketContext": "http://MarketContext1",
                 "duration": "PT30M",
                 "signals": [
                     {
                         "type": "LEVEL",
                         "intervals": [
                             {
                                 "duration": "PT30M",
                                 "value": "2"
                             }
                         ],
                         "id": "SIG_01",
                         "name": "SIMPLE",
                         "curValue": "0"
                     }
                 ],
                 "cancelled": false,
                 "testEvent": false,
                 "responseRequired": "NEVER",
                 "target": {
                     "resourceIDs": [],
                     "venIDs": []
                 },
                 "participationStatusTs": 1418802144615,
                 "modNumber": 0,
                 "vertex": "7601363e-6cb6-429b-93a4-b3072b217a0c",
                 "endTs": 1418804100000,
                 "startTs": 1418802300000,
                 "drProgram": "5e9bed61-04bf-4b7f-9f26-373bece7f3d6",
                 "rampUpStartTs": 1418802300000,
                 "recoveryEndTs": 1418804100000,
                 "accountParticipationKw": "0",
                 "participationStatus": "optIn",
                 "createdTs": 1418802144614,
                 "_cas": 7
             },
             {
                 "id": "3d653af2-7a08-416f-85cb-fb59002415eb",
                 "eventId": "Test03",
                 "dtStart": "2014-12-20T02:00:00.0000+0900",
                 "marketContext": "http://MarketContext1",
                 "duration": "PT30M",
                 "signals": [
                     {
                         "type": "LEVEL",
                         "intervals": [
                             {
                                 "duration": "PT30M",
                                 "value": "2"
                             }
                         ],
                         "id": "SIG_01",
                         "name": "SIMPLE",
                         "curValue": "0"
                     }
                 ],
                 "cancelled": false,
                 "testEvent": false,
                 "responseRequired": "NEVER",
                 "target": {
                     "resourceIDs": [],
                     "venIDs": []
                 },
                 "participationStatusTs": 1419007554042,
                 "modNumber": 0,
                 "vertex": "7601363e-6cb6-429b-93a4-b3072b217a0c",
                 "endTs": 1419010200000,
                 "startTs": 1419008400000,
                 "drProgram": "5e9bed61-04bf-4b7f-9f26-373bece7f3d6",
                 "rampUpStartTs": 1419008400000,
                 "recoveryEndTs": 1419010200000,
                 "accountParticipationKw": "0",
                 "participationStatus": "optIn",
                 "createdTs": 1419007554041,
                 "_cas": 7
        }];

  var valueAddress={};
  var valueHeader={};
  var valueKey = {};
  var address;
  var header;
  var key;

  valueAddress: this.valueAddress = function(addressVal){
    this.address=addressVal;
    return this.address;
  };
  valueHeader: this.valueHeader = function(headerVal){
    this.header=headerVal;
    return this.header;
  };
  valueKey: this.valueKey = function(keyVal){
    this.key=keyVal;
    return this.key;
  };

  $http.defaults.headers.common.Authorization = this.header;
  vtxAddress=this.address;
  keyValue = this.key;
  authheader = this.header;
  res = 'http://'+ vtxAddress+'/'+key;
  console.log('@serviceEvent-' + vtxAddress, authheader, keyValue, res);

  GET: return
  //        mockEvent;
      $resource(res).query()
      .$promise
      .then(function(response){
        $scope.serviceResponse = response;
  });

  DELETE: return $resource(res).remove()
      .$promise
      .then(function(response){
        $scope.serviceResponse = response;
  });

  POST: return $resource(res).save()
      .$promise
      .then(function(response){
        $scope.serviceResponse = response;
  });
})

.factory('serviceEvent',function(valueService){
  query: return serviceRest.GET;

})

.factory('serviceAccount',function(){
  return $resource(ENDPOINT_URI+'customer');
})

.factory('serviceUser',function(){
  return $resource(ENDPOINT_URI+'user');
})

.factory('serviceProgram',function(){
  return $resource(ENDPOINT_URI+'program');
})

.factory('serviceMetadata',function(){
  return $resource(ENDPOINT_URI+'dataset');
})

.factory('serviceData',function(){
  return $resource(ENDPOINT_URI+'data');
})

.factory('serviceAuthentication',function(){
  return $resource(ENDPOINT_URI+'authentication');
})

.factory('valueService', function($rootScope){
    var service = {};
    service.vtxAddress = null;
    service.programName = null;
    service.generic2 = null;
    service.basicAuthHeader = null;
    service.keyValue = null;

    service.updatevtxAddress = function(value){
        this.vtxAddress = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updateprogramName = function(value){
        this.programName = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updategeneric2 = function(value){
        this.generic2 = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updatebasicAuthHeader = function(value){
        this.basicAuthHeader = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updatekeyValue = function(value){
        this.keyValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    return service;
})
/*
.factory('GetUserService', function($http, ENDPOINT_URI, TESTAUTH) {
       console.log('at GetUserService');
       var service = this,
					 path = 'event';

			 service.getUrl = function() {
					 return ENDPOINT_URI + path;
			 }

       service.constantValue="check";

			 service.getUser = function() {
          alert('at getUser');
          $http.defaults.headers.common.Authorization = "Basic " + TESTAUTH;
					return $http.get(getUrl());
		};
})
*/

.factory('$Encode64', function(){
 var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=0,c1=0,c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

})


.service('Event', function ($resource, $http){

  var header;
  var address;
  var key;
  var retVal={};
  var valueAddress={};
  var valueHeader={};
  var valueKey = {};

  valueAddress: this.valueAddress = function(addressVal){
    this.address=addressVal;
    return this.address;
  };
  valueHeader: this.valueHeader = function(headerVal){
    this.header=headerVal;
    return this.header;
  };
  valueKey: this.valueKey = function(keyVal){
    this.key=keyVal;
    return this.key;
  };

  retVal: this.retVal=function(){
    $http.defaults.headers.common.Authorization = this.header;
    var end = '/Test00';
    return $resource('http://'+this.address+'/'+this.key+end);
  };

//  retVal: this.retVal=function(){
  //$http.defaults.headers.common.Authorization='Basic VGVzdE9wZXJhdG9yOnRlc3RvcGVyYXRvcg==';
  //return $resource('http://localhost:8100/event/Test00');
  //};

})


   .factory('$localstorage', ['$window', function($window) {
     return {
       set: function(key, value) {
         $window.localStorage[key] = value;
       },
       get: function(key, defaultValue) {
         return $window.localStorage[key] || defaultValue;
       },
       setObject: function(key, value) {
         $window.localStorage[key] = JSON.stringify(value);
       },
       getObject: function(key) {
         return JSON.parse($window.localStorage[key] || '{}');
       }
     }
   }]);

	 ;
