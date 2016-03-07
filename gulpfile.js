var gulp=require('gulp');
var stylus=require('gulp-stylus');
var concat=require('gulp-concat')



gulp.task('doStylus', function () {
  return gulp.src('lookinGood/lab15.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lookinGood'));
});


 gulp.task("concatScripts", function() {
            gulp.src([
              'controller/displaycontr.js',
              'controller/formcontr.js',
              'controller/herocontr.js',
              'controller/homecontr.js',
              'httpservice.js',
              'madlib.js',
              'service.js'])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
          });