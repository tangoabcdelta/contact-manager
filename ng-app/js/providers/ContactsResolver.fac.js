define([
  'angular',
  'lodash',
  'ContactManager.module',
  'providers/local-storage.fac.js',
  'providers/web-api.fac.js'
], function( angular, lodash ) {
  /**
   * @module ContactManager
   * @provider ContactsResolver
   * @brief helps in resolving the api queries to a fallback
   * if the $http.get() works out (which in this case is malfunctioning because of express's dev env),
   * the provider resolves to the web service (which doesn't exist in our case)
   * otherwise, it fallsback to the api's exposed via 'local-storage' provider
   * NOTE: In this case, I've provided a fallback to 'local-storage' in both cases to handle the aforementioned issue with 'express-static'
   */
  angular
  .module("ContactManager")
  .factory("ContactsResolver", ['$http', '$injector', function( $http, $injector ) {
    'use strict';
    var response;
    return $http.get('/get/contacts')
      .then(function () {
        console.log("This api is never present, so ideally you should never see this");
        // just for the sake of it
        // return $injector.get('web-api');

        //fallback
        return $injector.get('local-storage');
      }, function () {
        //the actual fallback, that you get if the web-api fails to respond
        console.log("But, you should ideally see this instead, through failure callback, a fallback ");
        return $injector.get('local-storage');
      });
  }]);
});
