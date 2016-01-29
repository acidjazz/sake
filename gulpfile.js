
var gulp = require('gulp');

var sync = require('browser-sync').create();

var notify = require('gulp-notify');

var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

var sourcemaps = require('gulp-sourcemaps');

var tap = require('gulp-tap');
var cache = require('gulp-cache');
var path = require('path');

var objectus = require('objectus');

objectus('dat/', function(error, result) {
  if (error) {
    notify(error);
  }
  data = result
});

gulp.task('objectus', function() {
  objectus('dat/', function(error, result) {

    if (error) {
      notify(error);
    }
    
    data = result;

  });
  return true;
});

gulp.task('vendors', function() {

  gulp.src([
      'bower_components/jquery/dist/jquery.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('vendor.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('pub/jst/lib'))

});

gulp.task('coffee', function() {
  gulp.src('cof/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true})
      .on('error', notify.onError(function(error) {
        return {title: "Coffee error", message: error.message + "\r\n" + error.filename + ':' + error.location.first_line, sound: 'Pop'};
      }))
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/jst'))
    .pipe(sync.stream());
});

gulp.task('stylus', function() {

  gulp.src('sty/main.styl')

    .pipe(sourcemaps.init())
    .pipe(stylus({ rawDefine: { data: data } })
    .on('error', notify.onError(function(error) {
      return {title: "Stylus error: " + error.name, message: error.message, sound: 'Pop' };
    })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/css'))
    .pipe(sync.stream());
});


gulp.task('jade', function() {

  gulp.src('tpl/**/index.jade')
    .pipe(jade({pretty: true, locals: {data: data}})
      .on('error', notify.onError(function(error) {
        return {title: "Jade error: " + error.name, message: error.message, sound: 'Pop' };
      }))
      .on('error', function(error) {
        console.log(error);
      })
    )
    .pipe(gulp.dest('pub'))
    .pipe(sync.stream());

});

gulp.task('sync', function() {
  sync.init({
    notify: false,
    open: false,
    server: {
      baseDir: 'pub/',
      }
    });

  gulp.watch('dat/**/*', ['objectus','stylus','jade']);
  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);
  gulp.watch('pub/img/lrg/**/*').on('change', function(test) {
    mogrify(test);
  });

});

function mogrify(data) {

  console.log(data);

  var images = ['.jpeg','.jpg','.png'];
  var sizes = ['2880','1440','1000'];

  if (data.type.indexOf(['added','changed'])) {
 
    if (path.extname(data.path).length > 0 && images.indexOf(path.extname(data.path)) == true) {
      dirname = path.dirname(data.path);
      for (var i = 0, l = sizes.length; i < l; i++) {

        // check if directory exists, if it doesnt, make it
        console.log('mkdir ' + dirname + '/' + sizes[i]);
      }

    }

  }

}

gulp.task('mogrify', function(data) {

  var images = ['jpeg','jpg','png'];

  return gulp.src('pub/img/**/*')
    .pipe(cache('images'))
    .pipe(tap(function(file, t) {

      console.log('starting');
      console.log(file.path);

      if (path.extname(file.path).length > 0 && path.extname(file.path).indexOf(images) === true) {
        console.log('we have an image touched');
        //console.log(file.path);
        //console.log(path.dirname(file.path))
        //
      }
    }));

});



gulp.task('watch', function() {
  gulp.watch('dat/**/*', ['objectus','stylus','jade']);
  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);
});

gulp.task('default', ['objectus','coffee', 'stylus', 'jade', 'vendors']);


