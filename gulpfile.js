var gulp = require('gulp'),
	sass = require('gulp-sass'),
	nunjucksRender = require('gulp-nunjucks-render'),
	browserSync = require('browser-sync').create(),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util');

// LOCAL SERVER
gulp.task('browser-sync', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'dist',
			startPath: 'index.html'
		}
	});
});

// MARKUP
gulp.task('render-nunjucks', function(){
	var env = nunjucksRender.nunjucks.configure(['src/templates/'], {watch: false, autoescape: true });


	// Update/Add a property within an object 
	// {% set myObject = myObject|updateobj('key', 'value') %}
	env.addFilter('updateobj', function(obj, key, value){
		if (obj === undefined) {
			obj = {};
		}
		obj[key] = value;
		return obj;
	});

	return gulp.src(['src/*.html'], {base: 'src'})
		.pipe(nunjucksRender().on('error', function(e){
			gutil.log(e);
			gutil.beep();
			this.emit('end');
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

// gulp.task('concat-component-macros', function(){
// 	return gulp.src('netapp-library/src/templates/components/_*.html')
// 		.pipe(concat('components.html'))
// 		.pipe(gulp.dest('netapp-library/src/templates/components'));
// });

// GENERATED COMPONENT FILES
// gulp.task('generate-component-files', ['concat-component-macros'], function(cb){
// 	fs.readFile('netapp-library/src/templates/components/components.html', 'utf-8', function(err, _data){
// 		// Looks at all nunjucks macros and extracts the ones matching this pattern: {% macro component_name_v1 %}, where the '_vX' at the end of the name is the key piece 
// 		var m,
// 			i,
// 			file_content,
// 			regex = /macro\s([\w]*_v[\d]*)/g,
// 			component_template = "{% extends 'examples.layout.html' %}\n{% block content %}\n{{ components.__REPLACE__() }}\n{% endblock %}\n"
// 			component_names = [],
// 			examples_dir = 'src/examples/';// 

// 		do {
// 			m = regex.exec(_data);
// 			if (m) {
// 				component_names.push(m[1]);
// 			}
// 		} while (m);// 

// 		if (!fs.existsSync(examples_dir)){
// 			fs.mkdirSync(examples_dir);
// 		}// 

// 		for (i=0; i < component_names.length; i++) {
// 			file_content = component_template.replace('__REPLACE__', component_names[i]);
// 			fs.writeFile(examples_dir + component_names[i] + '.html', file_content);
// 		}// 

// 		cb();
// 	});
// });

// SCRIPTS
// gulp.task('scripts', function(){
// 	return gulp.src('netapp-library/src/js/components/_*.js')
// 		.pipe(concat('components.js'))
// 		.pipe(gulp.dest('dist/netapp-library/js'));
// });


// STYLES
gulp.task('styles', function(){
	return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(error){
        	var message = new gutil.PluginError('sass', error.messageFormatted).toString();
			process.stderr.write(message + '\n');
			gutil.beep();
			this.emit('end');
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// FILE WATCHING
gulp.task('watch', function(){
	gulp.watch('src/**/*.html', ['render-nunjucks']);
	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/templates/components/_*.html', ['render-nunjucks']);
});

gulp.task('dev', ['render-nunjucks', 'styles', 'browser-sync', 'watch']);