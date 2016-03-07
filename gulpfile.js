var gulp=require('gulp');
var stylus=require('gulp-stylus');
var concat=require('gulp-concat');



gulp.task('doStylus', function () { //this works well
  return gulp.src('lookinGood/lab18.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lookinGood'));
});


 gulp.task("concatScripts", function() { //had errors with this on labe 15, not sure that it works
            gulp.src([
              'controller/externalSrcContr.js',
              'controller/homeContr.js',
              'controller/kataContr.js',
              'httpservice.js',
              'app.js',
              'service.js'])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
          });