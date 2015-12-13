// require([
//   'angular',
//   'lodash',
//   'angular-route',
//   'ContactManager.module',
//   'app.route',
//   'controllers/HomePageCtrl',
//   'controllers/CreateContactCtrl',
//   'controllers/EditContactCtrl',
//   'directives/contacts-thumb.dir.js',
//   'providers/local-storage.fac.js',
//   'providers/web-api.fac.js',
//   'providers/ContactsResolver.fac.js',
//   'angular-mocks'
// ], function( angular, _ ) {


describe("Application Config Spec", function(){

  it('should map routes to controllers', function() {
    module('ContactManager');
    inject(function($route) {
      expect($route.routes['/'].controller).toBe('HomePageCtrl');
      expect($route.routes['/contacts'].controller).toBe('HomePageCtrl');
      expect($route.routes['/contacts/new'].controller).toBe('CreateContactCtrl');
      expect($route.routes['/contacts/edit/:id'].controller).toBe('EditContactCtrl');
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });

  it('should map controllers to templateUrls', function() {
    module('ContactManager');
    inject(function($route) {
      expect($route.routes['/'].templateUrl).toEqual('home-page.html');
      expect($route.routes['/contacts'].templateUrl).toEqual('home-page.html');
      expect($route.routes['/contacts/new'].templateUrl).toEqual('create-contact.html');
      expect($route.routes['/contacts/edit/:id'].templateUrl).toEqual('edit-contact.html');
    });
  });


  it('should test routeProvider', function() {
    module('ContactManager');
    inject(function($route, $location, $rootScope, $httpBackend, $templateCache ) {
      expect($route.current).toBeUndefined();
      // $httpBackend.when('GET', '/get/contacts').respond(500, '');
      $httpBackend.expectGET('/get/contacts').respond(500);

      $httpBackend.expectGET($route.routes['/'].templateUrl).respond(200);
      $templateCache.put($route.routes['/'].templateUrl, "success" + $route.routes['/'].templateUrl);
      $location.path('/');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('home-page.html');
      expect($route.current.controller).toBe('HomePageCtrl');

      $httpBackend.expectGET($route.routes['/contacts'].templateUrl).respond(200);
      $templateCache.put($route.routes['/contacts'].templateUrl, "success" + $route.routes['/'].templateUrl);
      $location.path('/contacts');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('home-page.html');
      expect($route.current.controller).toBe('HomePageCtrl');

      $httpBackend.expectGET($route.routes['/contacts/new'].templateUrl).respond(200);
      $templateCache.put($route.routes['/contacts/new'].templateUrl, "success" + $route.routes['/'].templateUrl);
      $location.path('/contacts/new');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('create-contact.html');
      expect($route.current.controller).toBe('CreateContactCtrl');

      $httpBackend.expectGET($route.routes['/contacts/edit/:id'].templateUrl).respond(200);
      $templateCache.put($route.routes['/contacts/edit/:id'].templateUrl, "success" + $route.routes['/'].templateUrl);
      $location.path('/contacts/edit/:id');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('edit-contact.html');
      expect($route.current.controller).toBe('EditContactCtrl');

      $location.path('/otherwise');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('home-page.html');
      expect($route.current.controller).toBe('HomePageCtrl');

      // $httpBackend.flush();
    });
  });

});

// }); //end of require

// require([
//   'angular',
//   'lodash',
//   'angular-route',
//   'ContactManager.module',
//   'app.route',
//   'controllers/HomePageCtrl',
//   'controllers/CreateContactCtrl',
//   'controllers/EditContactCtrl',
//   'directives/contacts-thumb.dir.js',
//   'providers/local-storage.fac.js',
//   'providers/web-api.fac.js',
//   'providers/ContactsResolver.fac.js',
//   'angular-mocks'
// ], function( angular, _ ) {


describe("Testing all services", function(){
  var localStorage, $q;

  beforeEach(function(){
    module('ContactManager');
    inject(['local-storage', '$q', function (_localStorage, _$q) {
        localStorage = _localStorage;
        $q = _$q;
    }]);
  })
  it('should test ContactsProvider (alias for local-storage) api to be defined', function() {
    expect (localStorage).toBeDefined();
    expect (localStorage.get).toBeDefined();
    expect (localStorage.delete).toBeDefined();
    expect (localStorage.delete).toBeDefined();
  });


  describe('should test ContactsProvider (alias for local-storage) api to be working', function () {
    it("tests get method", function () {
      spyOn(localStorage, 'get').and.callThrough();
      localStorage.get({ id: 1 });
      expect (localStorage.get).toHaveBeenCalled();
    });
    it("tests get: without params NOT to throw errors", function () {
      expect (localStorage.get).not.toThrow();
    });
    it("tests delete method", function () {
      spyOn(localStorage, 'delete').and.callThrough();
      localStorage.delete({ id: 1 });
      expect (localStorage.delete).toHaveBeenCalled();
    });
    it("tests delete: without params NOT to throw errors", function () {
      expect (localStorage.delete).not.toThrow();
    });
    it("tests createNew method", function () {
      spyOn(localStorage, 'createNew').and.callThrough();
      localStorage.createNew({ id: 1 });
      expect (localStorage.createNew).toHaveBeenCalled();
    });
    it("tests createNew: without params TO throw errors", function () {
      expect (localStorage.createNew).toThrow();
    });

  });

  xit('should test ContactsProvider (alias for local-storage) service', function() {
    module('ContactManager');
    module(function($provide, $q, $controller, $rootScope) {
      $provide.factory('local-storage', function() {
        this.get = jasmine.createSpy('get').andCallFake(function() {
          expect(arguments.length).toBe(1);
          return  $q.when([{
            id: 1,
            name : 'Rodolfo P. Robinett',
            tel: '803-557-9815',
            email: 'RodolfoPRobinett@jourrapide.com'
          }]);
        });

        this.delete = jasmine.createSpy('delete').andCallFake(function( ) {
          if( arguments.length == 1 ) {
            expect(arguments.length).toBe(1);
            var arg = arguments[0];
            return  $q.when([{
              id: arg,
              name : 'Rodolfo P. Robinett',
              tel: '803-557-9815',
              email: 'RodolfoPRobinett@jourrapide.com'
            }]);
          }
          return  $q.reject(null);
        });
      });

      HomePageCtrl = $controller('HomePageCtrl', {
        $scope: $rootScope.$new()
      });
    });
  });

});

// }); //end of require
