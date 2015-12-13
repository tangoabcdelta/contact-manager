define([
  'angular',
  'lodash',
  'ContactManager.module'
], function( angular, _ ) {
  angular
  .module("ContactManager")
  .directive("contactsThumb", function() {
    return {
      restrict: "E",
      templateUrl: "contacts-thumb.html",
      link: function( scope, elem, attr ) {
        'use strict';
      }
    }
  });
});
