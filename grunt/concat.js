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
        'spec/all.tmp.js': [ 'spec/**/*.spec.js']
      }
    }
}
