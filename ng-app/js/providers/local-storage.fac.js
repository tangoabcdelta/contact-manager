define([
  'angular',
  'lodash',
  'ContactManager.module'
], function( angular, _ ) {
  /**
   * @module ContactManager
   * @provider local-storage
   * @brief fallback for the web-api
   * if the $http.get() fails to reach the web-service, it allows the app to work in offline mode
   * NOTE: We've not used the actual persistent 'web storage' here, it's just browser's in-memory
   */
  angular
  .module("ContactManager")
  .factory("local-storage", ['$q', function ($q) {
    'use strict';
    var store = [
      {
        id: 1,
        name : 'Terrence S. Hatfield',
        tel: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com'
      },
      {
        id: 2,
        name : 'Chris M. Manning',
        tel: '513-307-5859',
        email: 'ChrisMManning@dayrep.com'
      },
      {
        id: 3,
        name : 'Ricky M. Digiacomo',
        tel: '918-774-0199',
        email: 'RickyMDigiacomo@teleworm.us'
      },
      {
        id: 4,
        name : 'Michael K. Bayne',
        tel: '702-989-5145',
        email: 'MichaelKBayne@rhyta.com'
      },
      {
        id: 5,
        name : 'John I. Wilson',
        tel: '318-292-6700',
        email: 'JohnIWilson@dayrep.com'
      },
      {
        id: 6,
        name : 'Rodolfo P. Robinett',
        tel: '803-557-9815',
        email: 'RodolfoPRobinett@jourrapide.com'
      }
    ];
    function getContactsFromLocalStorage() {
      return store;
    }
    return {
      get: function ( contact ) {
        var deferred = $q.defer();
        if( contact && contact.id ) {
          deferred.resolve(  _.filter( store, contact ) );
        } else {
          deferred.resolve(  getContactsFromLocalStorage() );
        }
        return deferred.promise;
      },
      delete: function ( contact ) {
        var deferred = $q.defer();
        if( contact && contact.id ) {
          deferred.resolve( _.remove(store, contact) );
        } else {
          deferred.reject( null );
        }
        return deferred.promise;
      },
      createNew: function( contact ){
        var deferred = $q.defer();
        contact.id = store.length+1;
        deferred.resolve( store.push ( contact ) );
        return deferred.promise;
      },
      set: function ( contact ) {
        var deferred = $q.defer();
        store[ contact.id-1 ] = contact;
        deferred.resolve({});
        return deferred.promise;
      }
    }

  }]);
});
