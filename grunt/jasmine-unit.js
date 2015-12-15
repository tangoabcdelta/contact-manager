module.exports = function ( grunt ) {
  grunt.registerTask("jasmine-unit", function(){
    // grunt.task.run(['concat:spec', 'requirejs:jasmine', 'express:jasmine']);

    //skipping the requirejs as making it work with jasmine will take too much of effort
    grunt.task.run(['concat:spec', 'requirejs:jasmine']);
  });
}
