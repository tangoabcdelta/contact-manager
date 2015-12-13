/**
 * entry point for the angular-app: angular-app.js
 */
define([
  'angular',
  'lodash',
  'angular-route',
  'ContactManager.module',
  'controllers/HomePageCtrl',
  'controllers/CreateContactCtrl',
  'controllers/EditContactCtrl'
], function( angular, _ ) {
  //routing module
  //require the core module and controllers as dependencies
  angular
  .module("ContactManager")
  .config(function($routeProvider, $locationProvider) {
    'use strict';
    $locationProvider.html5Mode(true);
    //statement above enables routes without a trailing # character
    //caution: this may be incompatible with old IE versions


    //All routing mechanisms enlisted here
    $routeProvider.
    when('/', { controller: 'HomePageCtrl', templateUrl: 'home-page.html', resolve: { ContactsProvider: _res } }).
    when('/contacts', { controller: 'HomePageCtrl', templateUrl: 'home-page.html', resolve: { ContactsProvider: _res } }).
    when('/contacts/new', { controller: 'CreateContactCtrl', templateUrl:'create-contact.html', resolve: { ContactsProvider: _res } }).
    when('/contacts/edit/:id', { controller: 'EditContactCtrl', templateUrl:'edit-contact.html', resolve: { ContactsProvider: _res } }).
    otherwise({redirectTo:'/'});

    function _res ( ContactsResolver ) {
      // Get the correct module
      // If the web service exists, then returns web-api
      // If failed, fallsback to local-storage.
      return ContactsResolver.then(function (module) {
        module.get(); // Fetch the contacts in the background.
        return module;
      });
    }
  });
});
