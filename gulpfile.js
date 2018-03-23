const { exec } = require('child_process')
const sequence = require('run-sequence')
const gulp = require('gulp')

const fpsequence = (...args) => callback => sequence(...args.concat(callback))
const copyPipe = (input, output) => () => gulp.src(input).pipe(gulp.dest(output))

gulp.task('brunch:build', (callback) => {
	exec('brunch build', callback)
})

gulp.task('copy:node_modules', copyPipe('node_modules/**/*.*', 'build/node_modules'))
gulp.task('copy:public', copyPipe('public/**/*.*', 'build/public'))
gulp.task('copy:package', copyPipe('package.json', 'build'))

gulp.task('copy:assets', ['copy:node_modules', 'copy:public', 'copy:package'])

gulp.task('build', fpsequence('brunch:build', 'copy:assets'))
