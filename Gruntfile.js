module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
      // Task configurations
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/*.js'],
          dest: 'dist/bundle.js',
        },
      },
      uglify: {
        options: {
          mangle: false,
        },
        dist: {
          files: {
            'dist/bundle.min.js': ['dist/bundle.js'],
          },
        },
      },
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Register Grunt tasks
    grunt.registerTask('default', ['concat', 'uglify']);
  };
  