



/*
describe('vertexSDK', function(){

  console.log('serviceEvent factory test');

  beforeEach(module('vertexSDK'));


  describe('serviceEvent tests', function(){
    var factory= null;
    var resource = null;
    var httpBackend = null;
    beforeEach(inject(function(serviceEvent, $resource, $httpBackend){
        factory= serviceEvent;
        resource= $resource;
        httpBackend= $httpBackend;
      }));
    it('should instantiate', function(){
      expect(factory.getEvent).toBeDefined();
      expect(factory.getEvent).toEqual(jasmine.any(Function))
    });

    it('should get resource', function(){
      var resourceData={
        'header':'myHeader',
        'vtxAddress':'myAddress'
      };
      var result = factory.getEvent(resourceData);
      expect(result).toBeDefined();

    });
  });
});
*/
