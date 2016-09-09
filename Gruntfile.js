module.exports = function(grunt) {
   'use strict';

   require('time-grunt')(grunt);
   require('jit-grunt')(grunt, {
      scsslint: 'grunt-scss-lint'
   });

   var config = {
      src: 'js',
      dist: 'dist'
   };

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      config: config,

      browserify: {
         'public/src/main.js': ['js/**/*.js'],
         options: {
            banner: '/*! <%= pkg.name %>.js <%= pkg.version %> | Connor Cartwright (@ConnorCartwright)*/'
         }
      },

      pug: {
         compile: {
            options: {
               data: {
                  debug: false
               }
            },
            files: [
              {
               cwd: 'views',
               src: '**/*.pug',
               dest: 'public',
               expand: true,
               ext: '.html'
            }
            ]
         }
      },

      sass: {
         dist: {
            files: {
               'public/css/style.css': 'css/style.scss'
            }
         }
      },

      scsslint: {
         allFiles: [
           'css/**/*.scss'
         ],
         options: {
            config: './config/.scss-lint.yml',
            colorizeOutput: true
         }
      },

      jscs: {
         options: {
            config: './config/.jscsrc',
            fix: true
         },
         src: [
           '<%= config.src %>/**/*.js',
           'Gruntfile.js'
         ]
      },

      jshint: {
         options: {
            jshintrc: './config/.jshintrc',
            reporter: require('jshint-stylish')
         },
         src: [
           '<%= config.src %>/**/*.js',
           'Gruntfile.js'
         ]
      },

      watch: {
         js: {
            files: ['js/**/*.js'],
            tasks: ['jshint', 'jscs', 'browserify']
         },
         css: {
            files: ['css/**/*.scss'],
            tasks: ['scsslint', 'sass']
         },
         html: {
            files: ['views/**/*.pug'],
            tasks: ['pug']
         }
      },

      concurrent: {
         lint: [
            'jshint',
             'jscs',
             'scsslint',
             'pug'
            ],
         combine: ['browserify', 'sass']
      }
   });

   grunt.registerTask('default', ['concurrent']);
   grunt.registerTask('dev', ['concurrent', 'watch']);
};