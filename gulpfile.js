const { exec } = require('child_process')
const sequence = require('run-sequence')
const gulp = require('gulp')
const fp = require('fs-extra')

const fpsequence = (...args) => callback => sequence(...args.concat(callback))
const createCopyTask = (input, output) => () => fp.copy(input, output)

gulp.task('brunch:build', (callback) => {
	exec('brunch build', (err, stdout, stderr) => {
		callback(stderr)
	})
})

gulp.task('init:users', (callback) => {
	exec('yarn gen:base:users', (err, stdout, stderr) => {
		callback(stderr)
	})
})

gulp.task('copy:node_modules', createCopyTask('node_modules', 'build/node_modules'))
gulp.task('copy:base:users', createCopyTask('dbs/users.db', 'build/dbs/users.db'))
gulp.task('copy:package', createCopyTask('package.json', 'build/package.json'))
gulp.task('copy:doc:templates', createCopyTask('docs', 'build/docs'))
gulp.task('copy:public', createCopyTask('public', 'build/public'))
gulp.task('copy:hooks', createCopyTask('hooks', 'build/hooks'))

gulp.task('copy:assets', [
	'copy:doc:templates',
	'copy:node_modules',
	'copy:base:users',
	'copy:package',
	'copy:public',
	'copy:hooks',
])

gulp.task('build', fpsequence('brunch:build', 'init:users', 'copy:assets'))
