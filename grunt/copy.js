var _html_index = {
//index.html file is the only html page
//rest of the views will be partials/templates/custom-directives
  expand: true,
  cwd: 'ng-app/',
  src: ['index.html'],
  dest: 'dist/'
},
_html_templates = {
  expand: true,
  cwd: 'ng-app/templates/',
  src: ['*.html'],
  dest: 'dist/'
},
_img = {
  expand: true,
  cwd: 'app/img/faces/',
  src: ['*.*'],
  dest: 'dist/img/'
},
_fonts = {
  expand: true,
  cwd: 'vendor/bootstrap/dist/fonts/',
  src: ['*.*'],
  dest: 'dist/fonts/'
},
_src = {
  src: ['ng-app/js/*'],
  dest: 'jasmine-standalone-2.4.0/src/',
  flatten: false
},
_ngmocks = {
  src: ['vendor/angular-mocks/angular-mocks.js'],
  dest: 'jasmine-standalone-2.4.0/src/',
  flatten: false
},
_require = {
  expand: true,
  cwd: 'vendor/requirejs/',
  src: ['require.js'],
  dest: 'dist/js/'
};


module.exports = {
  html: {
    files: [ _html_index, _html_templates ]
  },
  img: {
    files: [ _img ]
  },
  fonts: {
    files: [ _fonts ]
  },
  main: {
    files: [
      //since requirejs is 3rd party library, we keep it in vendors
      //copy requirejs from 'vendor' to 'dist'
      _require,
      _html_index,
      _html_templates,
      _img,
      _fonts
    ]
  }
}
