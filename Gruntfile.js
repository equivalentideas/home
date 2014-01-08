
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'stylesheets',
          environment: 'production',
          outputStyle: 'expanded'
        }
      }
    },

    // sass: {
    //   dist: {
    //     options: {
    //       // cssmin will minify later
    //       style: 'expanded'
    //     },
    //     files: {
    //       'css/build/style.css': 'css/style.scss'
    //     }
    //   }
    // },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'stylesheets/style.css',
        dest: 'stylesheets/build/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
              'stylesheets/build/minified/style.css': ['stylesheets/build/prefixed/style.css']
        }
      }
    },

    jshint: {
      beforeconcat: ['js/*.js']
    },

    concat: {
      dist: {
        src: [
          'js/plugins/*.js',
          'js/global.js'
        ],
        dest: 'js/build/production.js',
        nonull: true,
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/',
          src: ['*.{png,jpg,gif}'],
          dest: 'assets/build/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['compass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['assets/*.{png,jpg,gif}', 'assets/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'imagemin']);

  grunt.registerTask('dev', ['watch']);
};