const { exec } = require('child_process')
const sequence = require('run-sequence')
const gulp = require('gulp')

const fpsequence = (...args) => callback => sequence(...args.concat(callback))
const createCopyTask = (input, output) => () => gulp.src(input).pipe(gulp.dest(output))

gulp.task('brunch:build', (callback) => {
	exec('brunch build', callback)
})

gulp.task('copy:node_modules', createCopyTask('node_modules/**/*.*', 'build/node_modules'))
gulp.task('copy:public', createCopyTask('public/**/*.*', 'build/public'))
gulp.task('copy:hooks', createCopyTask('hooks/*.*', 'build/hooks'))
gulp.task('copy:package', createCopyTask('package.json', 'build'))

gulp.task('copy:assets', [
	'copy:node_modules',
	'copy:public',
	'copy:hooks',
	'copy:package',
])

gulp.task('build', fpsequence('brunch:build', 'copy:assets'))
