
describe('serviceRest', function(){

  console.log('serviceRest factory test');
  // test service using keyValue= Event as an example
  var rootScope;
  var getList;
  var deleteList;
  var postList;
  var scope;
  var serviceRest;
  var queryDeferred;
  var deleteDeferred;
  var postDeferred;
  var q;
  var resource;
  var address;
  var header;
  var key;
  var mockValues;
  var mockresource;
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



  beforeEach(module('vertexSDK'));
  // disable Ionic service to enable testing of Resource via Jasmine (Ionic bug)
  // ref: https://github.com/angular-ui/ui-router/issues/212
  beforeEach(module(function($provide) {
    $provide.value('$ionicTemplateCache', function(){} );
  }));

  // disable Ionic service to enable testing of Resource via Jasmine (Ionic bug)
  // https://github.com/angular-ui/ui-router/issues/212
  beforeEach(module(function($urlRouterProvider) {
    $urlRouterProvider.deferIntercept();
  }));


  beforeEach(function(){

    mockValues={
      'address':'myAddress',
      'header':'myHeader',
      'key':'myKey'
    };

    module(function($provide){
      $provide.value('address', mockValues.address);
    });

    module(function($provide){
      $provide.value('header', mockValues.header);
    });

    module(function($provide){
      $provide.value('key', mockValues.key);
    });

    mockresource = {
      query: function(){
        queryDeferred = q.defer();
        return {$promise: queryDeferred.promise};
      }
    };

    module(function($provide){
      $provide.value('resource', mockresource);
    });

    mockserviceRest = {
      GET: function(){
        queryDeferred = q.defer();
          return {$promise: queryDeferred.promise};
      },
      DELETE: function(){
        deleteDeferred = q.defer();
          return {$promise: deleteDeferred.promise};
      },
      POST: function(){
        postDeferred = q.defer();
          return {$promise: postDeferred.promise};
      }
    };

    module(function($provide){
      $provide.value('serviceRest', mockserviceRest);
    });

    spyOn(mockserviceRest, 'GET').and.callThrough();
    spyOn(mockserviceRest, 'DELETE').and.callThrough();
    spyOn(mockserviceRest, 'POST').and.callThrough();
    spyOn(mockresource, 'query').and.callThrough();

    inject(function(_$rootScope_, $q, _$resource_, _serviceRest_, _address_,_header_,_key_) {
      serviceRest=_serviceRest_;
      resource=_$resource_;
      address=_address_;
      header=_header_;
      key=_key_;
      rootScope=_$rootScope_;
      q=$q;
      scope=rootScope.$new();

    });

  });

  beforeEach(function(){
    //instantiates the function

    getList=serviceRest.GET();
    deleteList=serviceRest.DELETE();
    postList=serviceRest.POST();

    queryDeferred.resolve(mockEvent);
    deleteDeferred.resolve();
    postDeferred.resolve();
    rootScope.$apply();

  });

  it('vtxAddress', function() {
    expect(address).toBe('myAddress');
  });

  it('header', function() {
    expect(header).toBe('myHeader');
  });

  it('keyValue', function() {
    expect(key).toBe('myKey');
  });

  it('should call GET', function() {
    expect(mockserviceRest.GET).toHaveBeenCalled();
  });

  it('should call DELETE', function() {
    expect(mockserviceRest.DELETE).toHaveBeenCalled();
  });

  it('should call DELETE', function() {
    expect(mockserviceRest.DELETE).toHaveBeenCalled();
  });

});
