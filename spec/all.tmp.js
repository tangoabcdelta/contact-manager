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

describe("Services Spec", function(){
    it('xxxxxxxx', function() {
      expect(true).toBe(true);
    });
});
