define([
  'angular',
  'lodash',
  'ContactManager.module',
  'providers/ContactsResolver.fac.js'
], function( angular, lodash ) {
  angular
  .module("ContactManager")
  .controller("CreateContactCtrl", [ "$scope", "$routeParams", "$location", "ContactsProvider", function ( $scope, $routeParams, $location, ContactsProvider ) {
    'use strict';
    $scope.submitNewContact = function () {
      ContactsProvider
      .createNew({
        name: $scope.name,
        email: $scope.email,
        tel: $scope.tel
      }).then(function(){
        $location.path("/");
      })
    }
  }]);
});
