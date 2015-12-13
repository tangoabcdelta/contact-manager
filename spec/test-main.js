var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

//made no change to the removal of extensions
var pathToModule = function(path) {
  var returnValue = path.replace(/^\/base\//, '').replace(/\.js$/, '');
  return returnValue;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // allTestFiles.push(pathToModule(file));
    allTestFiles.push(file);
  }
});
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  // for my requirejs's main.js eqv file, it was the root folder, as my config file (i.e. main.js eqv.)
  // resides in the same directory as scripts
  // To achieve the same effect, I've set the baseUrl to the '/base/ng-app/js', which shall behave as root
  baseUrl: '/base/ng-app/js',

  //However, the glitch in the system is, all other folders have to be relative to this (i.e. test-main.js) file's location (and not the baseUrl)
  //Correct me if I'm wrong, I believe this is wrong in terms of how requirejs works
  //It's un-intuitive in that term

  paths: {
    'angular': '../../vendor/angular/angular.min',
    'angular-route': '../../vendor/angular-route/angular-route.min',
    'angular-resource': '../../vendor/angular-resource/angular-resource.min',
    'lodash': '../../vendor/lodash/lodash.min',
    'jquery': "../../vendor/jquery/jquery",
    'ContactManager': "ContactManager.module",
    'spec': "../spec"

  },

  // This doesn't work: I don't know why. Both should work in the similar fashion.
  // The way how requirejs works, both of these snippets convey the same meaning.
  // baseUrl: '/base',
  // paths: {
  //   'angular': 'vendor/angular/angular.min',
  //   'angular-route': 'vendor/angular-route/angular-route.min',
  //   'angular-resource': 'vendor/angular-resource/angular-resource.min',
  //   'lodash': 'vendor/lodash/lodash.min',
  //   'jquery': "vendor/jquery/jquery",
  //   'ContactManager': "ng-app/js/ContactManager.module"
  // },

  //shims taken from my project's require config file
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
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
