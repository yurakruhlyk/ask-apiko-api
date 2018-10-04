const { spawn } = require('child_process');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('api', () => nodemon({
	script: './bin/www',
	watch: ['./app'],
	env: { NODE_ENV: 'development' },
}));

gulp.task('mongo', (callback) => {
	const dbProcess = spawn('mongod');
	dbProcess.on('data', console.log);
	dbProcess.on('close', (code) => {
		console.log(`Database was stopped with code ${code}`);
		callback();
	});
});

gulp.task('run:dev', ['mongo', 'api']);