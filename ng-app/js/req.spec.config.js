require.config({
  paths: {
    'angular': '../../vendor/angular/angular.min',
    'angular-route': '../../vendor/angular-route/angular-route.min',
    'angular-resource': '../../vendor/angular-resource/angular-resource.min',
    'lodash': '../../vendor/lodash/lodash.min',
    'jquery': "../../vendor/jquery/dist/jquery.min",

    'angular-mocks': '../../vendor/angular-mocks/angular-mocks',
    'jasmine': '../../jasmine-standalone-2.4.0/lib/jasmine-2.4.0/jasmine',
    'jasmine-html': '../../jasmine-standalone-2.4.0/lib/jasmine-2.4.0/jasmine-html',
    'jasmine-boot': '../../jasmine-standalone-2.4.0/lib/jasmine-2.4.0/boot',
    'all-specs': '../../spec/all.tmp'

  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ["angular"]
    },
    'angular-resource': {
      deps: ["angular"]
    },
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    },
    'all-specs': {
      deps : ['jasmine-boot']
    }
  }
});

// original
require([
  'angular',
  'angular-route',
  'ContactManager.module',
  'app.route',
  'jasmine-boot',
  'angular-mocks'
], function (angular) {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['ContactManager']);
  });
  require([
    '../../spec/all.tmp',
  ], function(){
    //trigger Jasmine
    window.onload();
  })
});


// require(['jasmine-boot'], function () {
//   require(['../../spec/app-config.spec'], function(){
//     //trigger Jasmine
//     window.onload();
//   })
// });
