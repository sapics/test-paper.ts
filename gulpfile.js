const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')

const srcList = [
  'basic/Base',
  'basic/Point',
  'basic/Size',
  'basic/Line',
  'basic/Rectangle',
  'basic/Matrix',
];
for (var i = srcList.length; i--;) {
  srcList[i] = 'src/' + srcList[i] + '.ts'
}

gulp.task('default', ['dts', 'watch'])

gulp.task('watch', function () {
  return gulp.watch('src/**/*.ts', ['dts'])
})

gulp.task('dts', function () {
  var tsResult = gulp.src([
      'src/**/*.ts',
      'node_modules/@types/**/index.d.ts'
    ])
    .pipe(sourcemaps.init())
    .pipe(ts({
      noImplicitAny: true,
      target: 'es2018',
      outFile: 'paper.js',
      declaration: true,
    })).on('error', () => { })

  return merge([
      tsResult.dts.pipe(gulp.dest('dist')),
      tsResult.js.pipe(gulp.dest('dist'))
    ])
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
});
