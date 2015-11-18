describe('vertexSDK', function(){

  console.log('settings controller test');


  beforeEach(module('vertexSDK'));


  describe('settingsCtrl', function() {
    var localstorage;
    var scope;
    var controller;

  beforeEach(inject(function($rootScope, $controller) {
    scope= $rootScope.$new();
    controller = $controller('settingsCtrl', {$scope: scope});
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
