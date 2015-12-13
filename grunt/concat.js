module.exports = {
    options: {
      separator: '\n',
      // process: function(src, filepath) {
      //   console.log( "found:" + filepath );
      // }
    },
    dev: {
      files: {
        // 'dist/js/main.out.js': ['ng-app/**/*.js']
        'dist/css/main.out.css': [
          'vendor/bootstrap/dist/css/bootstrap.css',
          'app/css/main.css',
          'ng-app/css/**/*.css'
        ]
      }
    },
    spec: {
      files: {
        'jasmine-standalone-2.4.0/spec/all.specs.js': [ 'spec/**/*.spec.js']
      }
    }
}
