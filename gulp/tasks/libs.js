module.exports = () =>
    $.gulp.task('libs', () =>
        $.gulp.src($.path.src.libs)
            .pipe($.gulp.dest($.path.build.libs)).on('end', $.bs.reload))