define([
  'angular',
  'lodash',
  'ContactManager.module',
  'providers/ContactsResolver.fac.js',
  'directives/contacts-thumb.dir.js'
], function( angular, _ ) {
  /**
   * @module ContactManager
   * @controller HomePageCtrl
   * @brief Takes control of the HomePage
   */
  angular
  .module("ContactManager")
  .controller("HomePageCtrl", [ "$scope", "ContactsProvider", function ( $scope, ContactsProvider ) {
   'use strict';
   $scope.Contacts = {};

   //get data from ContactsProvider service
   ContactsProvider.get()
   .then(function( response ){
      //update the scope with the data received
       $scope.Contacts = response;
   });
   $scope.deleteContact = function ( contact,  $event ) {
     console.log( contact, $event );
     ContactsProvider
     .delete({ id: contact.id }) //send a req. to the service with the id in params
     .then(function(){
        console.log("Item deleted");
     })
   }
  }]);
});
