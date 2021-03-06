angular.module('vertexSDK.controllers', ['vertexSDK.services'])


.controller('AppCtrl', function() {

 ionic.Platform.ready(function() {
   navigator.splashscreen.hide();
 })
})


.controller('AppController', ['$scope', '$state','$ionicHistory', '$ionicSideMenuDelegate', '$localstorage', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate, $localstorage) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.appGoBack=function(){
    $ionicHistory.goBack();

  }
}])

.controller('AppSideMenuController', ['$scope', '$state','$ionicHistory', '$ionicSideMenuDelegate', '$localstorage', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate, $localstorage) {


  $scope.checkValue=$localstorage.get('loggedInState');

}])

.controller('loggedOutCtrl', function() {
})

.controller('loggedInCtrl', function() {
})

.controller('loggedInFcnCtrl', function() {
})

.controller('function.controller', function() {
})

.controller('functionsController', function ($scope, $ionicHistory){

  //alert('at functions controller');

  $scope.functionlists = [
    { title: 'Home', id: 1 },
    { title: 'Events', id: 2 },
    //{ title: 'Users', id: 3 },
    { title: 'Accounts', id: 4 },
    { title: 'Programs', id: 5 },
    //{ title: 'Data Sets', id: 6 },
    //{ title: 'Gateway Status', id: 7 },
    //{ title: 'System Configuration', id: 8 }
  ]

  $scope.selectItem=function(functionlist){
    //alert(functionlist.title + " " + functionlist.id)
  }

})

.controller('functionSysController',function ($scope, $state, $location, $ionicViewService, $ionicHistory){

  //alert ('at functionSys controller');

  $scope.function_sysconfiglists = [
    { title: 'Home', id: 1 },
    { title: 'Global Settings', id: 2 },
    { title: 'Upstream Connection', id: 3 },
    { title: 'Registration', id: 4 },
    { title: 'Device Configuration', id: 5 },
    { title: 'Collector Configuration', id: 6 },
    { title: 'Email Configuration', id: 7 },
    { title: 'Authentication', id: 8 }
  ]

  $scope.selectConfigItem=function(function_sysconfiglist){
    //alert(function_sysconfiglist.title + " " + function_sysconfiglist.id);
    var state='app.loggedIn.function.'+function_sysconfiglist.id
    if(function_sysconfiglist.id==1){
    }else{
      $state.go(state);
    }
    //alert('state='+state);
    //alert('path='+'#/app/loggedIn/function/'+function_sysconfiglist.id);
  }


})



.controller('functionSys8Controller',function ($scope, $state, $location, $ionicViewService, $ionicHistory){


  $state.go('app.loggedIn.function.functionSys');


})

.controller('functionControllerSecondary', function($state, $scope, $ionicHistory, $location, $ionicViewService){

  //alert('at functionControllerSecondary');

  var valuelist = [
    { title: 'Home', id: 1 },
    { title: 'Events', id: 2 },
    //{ title: 'Users', id: 3 },
    { title: 'Accounts', id: 4 },
    { title: 'Programs', id: 5 },
    //{ title: 'Data Sets', id: 6 },
    //{ title: 'Gateway Status', id: 7 },
    //{ title: 'System Configuration', id: 8 }
  ];


  var page= $location.url().slice(-1);
  var index = parseInt(page)-1;
  $scope.value=page;
  //valuelist[index].title specifies the Function selected by the User
  document.getElementById('textInsert').innerHTML = 'Function is ' + valuelist[index].title;
  if (valuelist[index].title=='Events'){

    $state.go('app.loggedIn.2')
  }

//  if (valuelist[index].title=='Home'){

//    $state.go('app.loggedOut.home')
//  }
})

.controller('functionControllerTertiary', function($state, $scope, $ionicHistory, $location, $ionicViewService){

  //alert('at functionControllerTertiary');


  var valuelist_conf = [
    { title: 'Home', id: 1 },
    { title: 'Global Settings', id: 2 },
    { title: 'Upstream Connection', id: 3 },
    { title: 'Registration', id: 4 },
    { title: 'Device Configuration', id: 5 },
    { title: 'Collector Configuration', id: 6 },
    { title: 'Email Configuration', id: 7 },
    { title: 'Authentication', id: 8 }
  ];


  var pageConf= $location.url().slice(-1);
  var indexConf = parseInt(pageConf)-1;
  $scope.valueconf=pageConf;
  document.getElementById('textConfInsert').innerHTML = 'Function is ' + valuelist_conf[indexConf].title;

})


.controller('functionAuthController',function ($scope, $state, $location, $ionicViewService, $ionicHistory){

 alert('Authentication Selected');

})


.controller('refresh_control',function($scope,$interval, $localstorage){

  $interval(function(){
    $scope.checkValue=$localstorage.get('loggedInState');
    },1000);
})



.controller("HomeController", ['$scope', '$state', '$ionicHistory', function($scope, $state, $ionicHistory, $ionicViewService){


}])

.controller("signOffController", ['$state', '$ionicHistory','$localstorage',function($state, $ionicHistory, $localstorage) {
//not working yet
  $localstorage.set('loggedInState', false);
  $localstorage.set('basic_auth_header', 'Basic ' );

}])

.controller("settingsCtrl", ['$scope', '$ionicHistory', 'valueService', function($scope, $ionicHistory, valueService) {

  $scope.settingValues=[];
  $scope.settingValues={
    'vtxAddress' : 'localhost:8100',
    'programName' : 'null',
    'generic2' : 'null'
  };
  var value=null;


  settingsSubmit: $scope.settingsSubmit = function(settingValues){
    valueService.updatevtxAddress($scope.settingValues.vtxAddress);
    valueService.updateprogramName($scope.settingValues.programName);
    valueService.updategeneric2($scope.settingValues.generic2);
    return settingValues;
  };

}])

.controller("signInController",['$scope', '$http', '$state', '$localstorage', '$ionicHistory', 'valueService', function( $scope, $http, $state, $localstorage, $ionicHistory, valueService) {

 // https://scotch.io/license
 // From https://scotch.io/quick-tips/how-to-encode-and-decode-strings-with-base64-in-javascript
  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=0,c1=0,c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


  $scope.data=[];
  $scope.data = {
    "email" : null,
    "userName" : null,
    "passCode" : null,
    "confirmCode" : null,
    "submissions" : 0,
    "stateValue" : null,
    "userName64" : null,
    "passCode64" : null
  };

  $scope.signInSubmit = function(data) {
    $scope.data.submissions++;

    $localstorage.set('email', $scope.data.email);
    $localstorage.set('userName', $scope.data.userName);
    $localstorage.set('passCode', $scope.data.passCode);
    $localstorage.set('confirmCode', $scope.data.confirmCode);

    if ($localstorage.get('passCode')!=$localstorage.get('confirmCode')){
      alert('does not match');
      $localstorage.set('loggedInState', false);
      $scope.data.stateValue=$localstorage.get('loggedInState');
    }else{
      //construct basic authentication header value; change local client log state to true
      var header_value=$scope.data.userName+":"+$scope.data.passCode;
      var header64=Base64.encode(header_value);
      $localstorage.set('basic_auth_header', 'Basic '+ header64 );
      //alert($localstorage.get('basic_auth_header'));
      $localstorage.set('loggedInState', true);
      $scope.data.stateValue=$localstorage.get('loggedInState');
      valueService.updatebasicAuthHeader('Basic '+ header64);
      //alert('base64: '+ valueService.basicAuthHeader);
    }

};

}])

.controller('refresh_control_http_header', function ($scope, $interval, $route){

  $interval(function(){
    $scope.reloadRoute = $route.reload();
   },500);

})

.controller('userInfoController', function ($scope, Event, $ionicLoading, valueService){

    valueService.updatekeyValue('event');
    var address = Event.valueAddress(valueService.vtxAddress);
    var header =Event.valueHeader(valueService.basicAuthHeader);
    var key = Event.valueKey(valueService.keyValue);
    var mkEvent=[{
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

    $scope.mockEvent=mkEvent;



    var returnedVal=Event.retVal();
    $scope.event = returnedVal.get().$promise.then(function(response){
      $scope.serviceResponse = response;
      return response;
    });
})

/******************************************/
/*  level 1 functionality menu controllers
/*
/*
*/

.controller('getEvents',function ($scope, serviceRest, valueService){

  //var retRes;
      //1- get basicAuthHeader, the header from valueService
      //2- get vtxAddress, the Vertex host address from valueService
      //3- get resource handle from serviceEvent

  valueService.updatekeyValue('event');
  var address = serviceRest.valueAddress(valueService.vtxAddress);
  var header = serviceRest.valueHeader(valueService.basicAuthHeader);
  var key = serviceRest.valueKey(valueService.keyValue);

//  $scope.eventLists= mockEvent;
  var returnedVal=serviceRest.GET();
  $scope.eventLists= returnedVal.query().$promise.then(function(response){
        $scope.serviceResponses = response;
        return response;
      });
})

.controller('getUsers',function ($scope, serviceRest, valueService){

  valueService.updatekeyValue('user');
  var address = serviceRest.valueAddress(valueService.vtxAddress);
  var header = serviceRest.valueHeader(valueService.basicAuthHeader);
  var key = serviceRest.valueKey(valueService.keyValue);

//  $scope.eventLists= mockEvent;
  var returnedVal=serviceRest.GET();
  $scope.eventLists= returnedVal.query().$promise.then(function(response){
        $scope.serviceResponses = response;
        return response;
      });
})

.controller('getAccounts',function ($scope, serviceRest, valueService){

  valueService.updatekeyValue('customer');
  var address = serviceRest.valueAddress(valueService.vtxAddress);
  var header = serviceRest.valueHeader(valueService.basicAuthHeader);
  var key = serviceRest.valueKey(valueService.keyValue);

//  $scope.eventLists= mockEvent;
  var returnedVal=serviceRest.GET();
  $scope.eventLists= returnedVal.get().$promise.then(function(response){
        $scope.serviceResponses = response;
        return response;
      });
})

.controller('getPrograms',function ($scope, serviceRest, valueService){

  valueService.updatekeyValue('program');
  var address = serviceRest.valueAddress(valueService.vtxAddress);
  var header = serviceRest.valueHeader(valueService.basicAuthHeader);
  var key = serviceRest.valueKey(valueService.keyValue);

//  $scope.eventLists= mockEvent;
  var returnedVal=serviceRest.GET();
  $scope.eventLists= returnedVal.get().$promise.then(function(response){
        $scope.serviceResponses = response;
        return response;
      });
})
/******************************************/
/*  level 2 functionality menu controllers
/*
/*
*/


//end of controllers
;
