module.exports = {
  compile: {
    options: {
      // appDir: "ng-app/js/",
      baseUrl: 'ng-app/js/',
      mainConfigFile: "ng-app/js/req.config.js",
      name: 'req.config',
      out: 'dist/js/main.out.js',
      optimize: 'none',

      //other configurations
      logLevel: 0,
      findNestedDependencies: true,
      fileExclusionRegExp: /^\./,
      inlineText: true
    }
  },
  jasmine: {
    options: {
      baseUrl: 'ng-app/js/',
      mainConfigFile: "ng-app/js/req.config.js",
      name: 'req.config',
      out: 'jasmine-standalone-2.4.0/src/main.out.js',
      optimize: 'none',
      logLevel: 0,
      findNestedDependencies: true,
      fileExclusionRegExp: /^\./,
      inlineText: true
    }
  }
}
//as found on: http://jaketrent.com/post/run-requirejs-with-gruntjs/
//further reading: http://clintconklin.com/optimizing-multiple-javascript-files-with-grunt-and-requirejs/
