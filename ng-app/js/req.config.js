require.config({
  paths: {
    'angular': '../../vendor/angular/angular.min',
    'angular-route': '../../vendor/angular-route/angular-route.min',
    'angular-resource': '../../vendor/angular-resource/angular-resource.min',
    'lodash': '../../vendor/lodash/lodash.min',
    'jquery': "../../vendor/jquery/dist/jquery.min"
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
    }
  }
});

// original
require([
  'angular',
  'angular-route',
  'ContactManager.module',
  'app.route'
], function (angular) {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['ContactManager']);
  });
});

// quick
// require([
//   'angular',
//   'angular-router',
//   'ContactManager.module'
// ], function (angular) {
//   angular.element(document).ready(function () {
//     angular.bootstrap(document, ['ContactManager']);
//   });
// });
