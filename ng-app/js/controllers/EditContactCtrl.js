define([
  'angular',
  'lodash',
  'ContactManager.module',
  'providers/ContactsResolver.fac.js'
], function( angular, _ ) {
  /**
   * @module ContactManager
   * @controller HomePageCtrl
   * @brief Takes control of the EditContact page
   */
  angular
  .module("ContactManager")
  .controller("EditContactCtrl", [ "$scope", "$routeParams", "$location", "ContactsProvider", function ( $scope, $routeParams, $location, ContactsProvider ) {
    'use strict';
    var id = parseInt( $routeParams.id, 10 ); //matches the route and determines the ID from the routeParams
    ContactsProvider
    .get({ id: id }) // get the specific 'contact' element from the ContactsProvider
    .then(function(contact){
      if( contact.length > 0 ) { //if exists
        $scope.Contacts = contact[0]; //update the scope with the data received
      }
    });

    //event handler to run on Submit button click
    $scope.submitEdited = function (){
      ContactsProvider
      .set( $scope.Contacts ) //reads the contact from the scope & sends to the ContactsProvider service
      .then(function(){
        $location.path("/");
      });

    }
  }]);

})
