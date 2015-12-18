module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
          styles: {
            files: ["src/scss/**"],
            tasks: ["styles"]
          },
          scripts: {
            files: ["src/js/**", "!src/js/components/all-components.js"],
            tasks: ["scripts"]
          },
          svg: {
            files: ['src/svg/**'],
            tasks: ['svg_sprite']
          },
          images: {
            files: ['src/images/**'],
            tasks: ['copy:images']
          },
          markup: {
            files: ['src/templates/**', 'src/layouts/**', 'src/components/**', '!src/components/all-components.html'],
            tasks: ['markup']
          }
        },
        sass: {
          eightshapes: {
            options: {
              sourceMap: true,
              includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
            },
            files: [
              {
                expand: true,
                cwd: 'src/scss/',
                src: '*.scss',
                dest: 'dist/css/',
                ext: '.css'
              }
            ]
          }
        },
        postcss: {
            options: {
              map: true, // Use and update the sourcemap
              processors: [
                require('autoprefixer')({browsers: 'last 2 versions'}),
                require('cssnano')()
              ]
            },
            eightshapes: {
                expand: true,
                flatten: true,
                src: 'dist/css/*.css',
                dest: 'dist/css'
            }
        },
        copy: {
          images: {
            files: [
              {
                expand: true,
                cwd: 'src/images/',
                src: '**',
                dest: 'dist/images',
                filter: 'isFile'
              }
            ]
          },
          scripts: {
            files: [{
              expand: true,
              cwd: 'src/js/',
              extDot: 'last',
              src: ['*.js', '**/*.js', '!**/_*.js'],
              dest: 'dist/js',
              filter: 'isFile'
            }]
          },
          htaccess: {
            src: 'src/.htaccess',
            dest: 'dist/.htaccess'
          },
          responsive_grid_demo: {
            expand: true,
            cwd: 'src/responsive-grid-demo',
            src: '**',
            dest: 'dist/responsive-grid-demo/'
          }
        },
        svg_sprite: {
          eightshapes: {
            expand: true,
            cwd: 'src/svg',
            src: ['*.svg', '!sprite.svg'],
            dest: 'dist/svg',
            svg: {
                namespaceIDs: false
            },
            options: {
              mode: {
                symbol: {
                  dest: '.',
                  sprite: 'sprite.svg',
                  example: false
                }
              }
            }
          }
        },
        browserSync: {
          bsFiles: {
              src : [
                  'dist/css/*.css',
                  'dist/images/**',
                  'dist/js/**',
                  'dist/*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './dist'
          }
        },
        nunjucks: {
          options: {
            data: grunt.file.readJSON('nunjucks_data.json'),
            paths: ['src/templates', 'src/layouts', 'src/components', 'src/includes'],
            configureEnvironment: function(env, nunjucks) {
              env.addFilter('updateobj', function(obj, key, value){
                if (obj === undefined) {
                  obj = {};
                }
                obj[key] = value;
                return obj;
              });
            }
          },
          render: {
            files: [
               {
                  expand: true,
                  cwd: "src/templates/",
                  src: "**/*.html",
                  dest: "dist/",
                  ext: ".html"
               }
            ]
          }
        },
        concat: {
          components: {
            src: ['src/components/*.html', '!src/components/all-components.html'],
            dest: 'src/components/all-components.html'
          },
          component_scripts: {
            src: ['src/js/components/*.js', '!src/js/components/all-components.js'],
            dest: 'src/js/components/all-components.js' 
          }
        },
        clean: {
          dist: ['dist']
        }
    });
    
    grunt.registerTask('styles', ['sass', 'postcss']);
    grunt.registerTask('scripts', ['concat:component_scripts', 'copy:scripts']);
    grunt.registerTask('markup', ['concat:components', 'nunjucks'])
    grunt.registerTask('build', ['clean:dist', 'markup', 'styles', 'scripts', 'svg_sprite', 'copy']);
    grunt.registerTask('dev', ['build', 'browserSync', 'watch']);
};
