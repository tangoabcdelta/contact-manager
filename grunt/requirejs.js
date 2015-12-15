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
      baseUrl: 'ng-app/js/', //curr. working directory, acts as the relative root for rest of the modules
      mainConfigFile: "ng-app/js/req.spec.config.js", //absolute URL: From the root of the folder
      name: 'req.spec.config', //alias for the module to be generated
      out: 'jasmine-standalone-2.4.0/src/src.plus.spec.js', //absolute URL for output file location

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
