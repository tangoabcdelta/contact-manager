module.exports = function ( grunt ) {
  grunt.registerTask('build', function( targetEnvironment ) {
    switch (targetEnvironment) {
      case 'dev':
      case 'development':

        // filerev_apply is not functioning properly right now
        // therefore, removing it
        grunt.task.run(['clean:dist', 'copy', 'copy:html', 'copy:img', 'concat', 'requirejs', 'watch:html', 'watch:scripts', 'watch:grunt']);
        break;

      case 'staging':
      case 'production':
      case '':
      default:
       grunt.task.run(['clean:dist', 'concat', 'requirejs', 'filerev', 'copy', 'watch', 'express:dev']);
    }
  });
}
