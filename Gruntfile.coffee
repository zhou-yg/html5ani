module.exports = (_grunt)->
  _grunt.initConfig
    coffee:
      indexFilesTo:
        expand:true
        cwd:'coffees'
        src:'*.coffee'
        dest:''
        ext:'.js'

  _grunt.loadNpmTasks('grunt-contrib-coffee')

  _grunt.registerTask('default', ['coffee']);