describe('settings', function() {

    var controller,
        deferredSettings,
        settingsMock,
        stateMock,
        ionicPopupMock;

        beforeEach(module('vertexSDK'));

    // TODO: Instantiate the Controller and Mocks

    beforeEach(inject(function($controller, $q){
        deferredSettings = $q.defer();

        settingsMock = {

          settings: jasmin.createSpy('settings spy').and.returnValue(deferredSettings.promise)

        };

        stateMock = jasmine.createSpyObj('$state spy', ['go']);

        ionicPopupMock = jasmine.creatSpyObj('ionicPopup spy',['alert']);

        controller = $controller('settingsCtrl',{
          '$ionicPopup': ionicPopupMock,
          '$state': stateMock,
          'settings' : settingsMock
        });
    }));



    describe('#settingsCtrl', function() {

        describe('settingsSubmit', function () {
          it('should assign settingsValues to $localstorage', function () {
            expect($localstorage.vtxAddress).toBe(null);
            expect($localstorage.programName).toBe(null);
            expect($localstorage.generic2).toBe(null);
          });
        });

        describe('watch_vtxAddress', function (){
          it('', function (){
            expect().toBe();
          });
        });

        describe('watch_programName', function (){
          it('', function (){

          });
        });

        describe('watch_generic2', function (){
          it('', function (){

          });
        });

        it('should get Events on serviceEvent', function() {
            expect(serviceEventMock.getEvent).toHaveBeenCalledWith('TestOperator','testoperator', 'Test00' );
        });

        describe('when the getEvents is executed,', function() {
            it('if successful, should fill array with Events', function() {

                // TODO: Mock the get event response from serviceEvent

                expect(stateMock.go).toHaveBeenCalledWith('my-dinners');
            });

            it('if unsuccessful, should show a popup', function() {

                // TODO: Mock the get Event response from serviceEvent

                expect(ionicPopupMock.alert).toHaveBeenCalled();
            });
        });
    })
});
