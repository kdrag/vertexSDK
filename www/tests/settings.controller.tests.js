describe('vertexSDK', function(){

beforeEach(module('vertexSDK'));


describe('settingsCtrl', function() {
  var localstorage;
  var scope;
  var controller;



  beforeEach(inject(function($rootScope, $controller, $localstorage) {

    scope= $rootScope.$new();
    localstorage= $localstorage;

    controller = $controller('settingsCtrl', {$scope: scope, $localstorage: localstorage});



  }));

  it ('sets vtxAddress, programName, and generic2 to input field values', function (){

    var param = {
      'vtxAddress' : 'myAddress',
      'programName' : 'program1',
      'generic2' : 'generic'
    };



      var result = scope.settingsSubmit(param);
      expect(result.vtxAddress).toEqual('myAddress');
      expect(result.programName).toEqual('program1');
      expect(result.generic2).toEqual('generic');
    });
});

});
