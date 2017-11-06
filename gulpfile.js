var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var gulpLoadPlugins = require('gulp-load-plugins');
var webpack = require('gulp-webpack');
var runSequence = require('run-sequence');

var $ = gulpLoadPlugins();
var pkg = require('./package.json');
var webpackConfig = require('./webpack.config.js');
var webpackDevConfig = require('./webpack.config.dev.js');

// ------------------------------------------------------------------------------------------------------------
// index.js, preorder.js build
// ------------------------------------------------------------------------------------------------------------

var HEADER = [
  '/**',
  ' * ' + pkg.name,
  ' * @version ' + pkg.version,
  ' * @update ' + new Date().toISOString().slice(0,10),
  ' **/',
  ''
].join('\n');

var PATH = {
  JS_ENTRY: '_src/js/**/App.js',
  JS: '_src/js/**/*.js',
  CSS: '_src/sass/**/*.scss'
};

// gulp.task('clean', function() {
//   return gulp.src(['js/!(*.dev.*)', 'css'], { read: false })
//     .pipe($.clean({ force: true }));
// });

gulp.task('jsbeautifier', function() {
  return gulp.src(PATH.JS)
      .pipe($.jsbeautifier({
        indent_size: 4,
        js: {
          indent_size: 2
        }
      }))
      .pipe(gulp.dest('_src/js'));
});

gulp.task('webpack', function() {
  return gulp.src(PATH.JS_ENTRY)
      .pipe($.util.env.production ? webpack(webpackConfig) : webpack(webpackDevConfig))
      .pipe($.header(HEADER))
      .pipe(gulp.dest('./js'));
});

gulp.task('css', function() {
  return gulp.src(PATH.CSS)
  //.pipe($.sourcemaps.init())
      .pipe($.sass({outputStyle: 'compact'}).on('error', $.sass.logError))
      //.pipe($.sourcemaps.write('.'))
      .pipe($.util.env.production ? cleanCSS({rebase: true}) : $.util.noop())
      .pipe($.header(HEADER))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(PATH.JS, ['webpack']);
  gulp.watch(PATH.CSS, ['css']);
});

gulp.task('css:watch', function() {
	gulp.watch(PATH.CSS, ['css']);
});

gulp.task('js:watch', function() {
  gulp.watch(PATH.JS, ['webpack']);
});

gulp.task('preorder:vendor', function(){
  var files = [
    './vendor/underscore.1.8.3.js',
    './vendor/swiper.min.js',
    './vendor/jquery.easings.min.js',
    './vendor/scrolloverflow.patch.js',
    './vendor/jquery.fullpage.min.js'
  ];

  return gulp.src(files)
      .pipe($.concat('preorder.vendor.min.js'))
      .pipe($.uglify())
      .pipe($.header(HEADER))
      .pipe(gulp.dest('js'))
});

gulp.task('default',  function() {
 // runSequence('clean', ['css', 'jsbeautifier', 'webpack']);
  runSequence(['css', 'jsbeautifier', 'webpack']);
});
