
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat')






gulp.task('doStylus', function () { //this works well
  return gulp.src('lookinGood/lab18.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lookinGood'));
});


 gulp.task("concatScripts", function() { //had errors with this on labe 15, not sure that it works
            gulp.src([
              'app.js',
              'controllers/externalSrcContr.js',
              'controllers/homeContr.js',
              'controllers/kataContr.js',
              'routes/routes.js',
              'services/externalSrcService.js'
              ])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
          });