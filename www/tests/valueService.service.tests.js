describe('valueService tests', function(){

  console.log('valueService factory test');

  var valueService;

  beforeEach(function(){
    module('vertexSDK');

    inject(function($rootScope, _valueService_){
      valueService= _valueService_;
    });
  });


  it('should update vtxAddress', function(){
    valueService.updatevtxAddress('myAddress');
    expect(valueService.vtxAddress).toBe('myAddress');
  });
  it('should update programName', function(){
    valueService.updateprogramName('myProgram');
    expect(valueService.programName).toBe('myProgram');
  });
  it('should update generic2', function(){
    valueService.updategeneric2('myGeneric');
    expect(valueService.generic2).toBe('myGeneric');
  });
  it('should update basicAuthHeader', function(){
    valueService.updatebasicAuthHeader('myAuth');
    expect(valueService.basicAuthHeader).toBe('myAuth');
  });


});
