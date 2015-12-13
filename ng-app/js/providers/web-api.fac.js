define([
  'angular',
  'lodash',
  'ContactManager.module'
], function( angular, lodash ) {
  /**
   * If our app had a real web-api, we could have used this
   * Assuming, it doesn't exist
   */
  angular
  .module("ContactManager")
  .factory("web-api", ['$q', function ($q) {
    console.log("nothing in here");
    return null;
  }]);

  //Future module: Not in use
  //Malfunctioning: As the case for Error 404 (html) response from express-static server hasn't been handled
  angular
  .module("ContactManager")
  .factory("ContactsResourceProvider", ['$resource', '$injector', function( $resource, $injector ) {
    'use strict';
    var Contacts = $resource("/some/url", null, {});
    return Contacts
      .get({})
      .$promise
      .then( function(){
        console.log("This server is never present, so you never see this");
      }, function(){
        console.log("So, you see this instead, as a failure callback");
        return {};
      })
  }]);
});
