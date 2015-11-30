describe('Event service tests', function($resource){

  console.log('Event Service test');

  var Event;

  beforeEach(function(){
    module('vertexSDK');

    inject(function($rootScope, _Event_){
      Event= _Event_;
    });
  });


  it('should update vtxAddress', function(){
    expect(Event.valueAddress('myAddress')).toBe('myAddress');
  });

  it('should update header', function(){
    expect(Event.valueHeader('myHeader')).toBe('myHeader');
  });
  it('should update key value', function(){
    expect(Event.valueKey('myKey')).toBe('myKey');
  });
  it('should return a resource', function(){
    expect(Event.retVal()).toBeDefined();
  });

});
