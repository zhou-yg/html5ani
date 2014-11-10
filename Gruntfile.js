// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = function(_grunt) {
    _grunt.initConfig({
      coffee: {
        indexFilesTo: {
          expand: true,
          cwd: 'coffees',
          src: '*.coffee',
          dest: '',
          ext: '.js'
        }
      }
    });
    _grunt.loadNpmTasks('grunt-contrib-coffee');
    return _grunt.registerTask('default', ['coffee']);
  };

}).call(this);

//# sourceMappingURL=Gruntfile.js.map