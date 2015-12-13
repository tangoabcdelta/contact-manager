/**
 * entry point for the angular-app: angular-app.js
 */
define([
  'angular',
  'lodash',
  'angular-resource',
  'angular-route'
], function( angular, _ ) {
  'use strict';
  //core module
  return angular.module("ContactManager", ['ngResource', 'ngRoute']);
});
