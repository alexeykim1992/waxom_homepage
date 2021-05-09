path: {
    const video = require('./gulp/tasks/video');

    global.$ = {
        gulp: require('gulp'),
        gp: require('gulp-load-plugins')(),
        bs: require('browser-sync').create(),
        tasks: require('./gulp/config/tasks'),
        path: {
            serverDir: 'app/build',
            src: {
                // понимание откуда взять
                html: 'app/src/*.html',
                style: 'app/src/styles/*.*',
                js: 'app/src/scripts/*.*',
                img: 'app/src/images/**/*.{png,jpg,jpeg,webp,gif}',
                fonts: 'app/src/fonts/**/**/*.*',
                video: 'app/src/video/*.*',
                libs: 'app/src/libs/**/**/**/**/*.*'
            },
            build: {
                html: 'app/build/',
                style: 'app/build/styles/',
                js: 'app/build/scripts/',
                img: 'app/build/images/',
                fonts: 'app/build/fonts/',
                video: 'app/build/video/',
                libs: 'app/build/libs/'
            },
            watch: {
                html: ['app/src/*.html', 'app/src/views/'],
                style: 'app/src/styles/**/**/*.*',
                js: 'app/src/scripts/**/*.*',
                img: 'app/src/images/**/*.{png,jpg,jpeg,webp,gif}',
                fonts: 'app/src/fonts/**/*.*',
                video: 'app/src/video/*.*',
                libs: 'app/src/libs/**/**/**/**/*.*'
            }
        }
    }
}

$.tasks.forEach(tasksPath => require(tasksPath)());
$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'video', 'style', 'js', 'img', 'fonts', 'libs', 'watch', 'serve')));
$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'video', 'style', 'js', 'img', 'fonts', 'libs')));