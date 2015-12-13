module.exports = {
  scripts: {
    files: ['ng-app/**/*.js'],
    tasks: ['copy'],
    options: {
      debounceDelay: 1000,
      spawn: false,
      reload: true,
      livereload: true
    }
  },
  html: {
    files: ['ng-app/**/*.html'],
    tasks: ['copy:html'],
    options: {
      debounceDelay: 1000,
      spawn: false,
      reload: true,
      livereload: true
    }
  },
  grunt: {
    files: ['grunt/**/*.js'],
    tasks: ['default'],
    options: {
      debounceDelay: 1000,
      spawn: false,
      reload: true,
      livereload: true
    }
  }
}
