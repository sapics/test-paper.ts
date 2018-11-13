const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')
const concat = require('gulp-concat')

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

gulp.task('concat', function () {
  return gulp.src(srcList)
    .pipe(concat('paper.ts'))
    .pipe(gulp.dest('dist'))
})

gulp.task('dts', ['concat'], function () {
  var tsResult = gulp.src([
    'dist/paper.ts',
    'node_modules/@types/**/index.d.ts'
  ]).pipe(ts({
    declaration: true,
    target: 'es2018'
  })).on('error', () => { })
  ;
  return merge([
    tsResult.dts.pipe(gulp.dest('dist')),
    tsResult.js.pipe(gulp.dest('dist'))
  ])
});
