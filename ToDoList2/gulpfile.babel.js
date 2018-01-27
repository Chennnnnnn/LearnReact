// 引入gulp
var gulp = require('gulp'); // 基础库
var babel = require('gulp-babel'); //babe编译
// browserify包及相关插件
var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
	buffe = require('vinyl-buffer');	
// 引入gulp插件
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
	webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', () => {
	gulp.src('./') // 服务器目录（./代表根目录）
		.pipe(webserver({ // 运行gulp-webserver
			livereload: true, // 启用LiveReload
			open: true // 服务器启动时自动打开网页
		}));
});

// 模块依赖
gulp.task('browserify', ['babel-transform'],() => {
	return browserify({
			entries: "./dist/index.js",
			debug: true
		})
		.bundle()	
		.pipe(source("bundle.js"))
		.pipe(buffe())	
		.pipe(gulp.dest("./"));
})

//转码
gulp.task('babel-transform', () =>
	gulp.src(['src/**/*'])
	.pipe(babel({
		presets: ['env']
	}))
	.pipe(gulp.dest('dist'))
);


// 监听任务
gulp.task('watch', () => {
	gulp.watch('src/**/*.js', ['browserify'], (event) => {
		livereload.changed(event.path);
	}) // 监听根目录下所有.js文件
});

// 默认任务
gulp.task('default', ['webserver','browserify', 'watch']);