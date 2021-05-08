module.exports = () =>
    // ставим задачу галпу и называем задачу fonts
    $.gulp.task('fonts', () =>
        //  указываем откуда брать файлы
        $.gulp.src($.path.src.fonts)
        .pipe($.gp.ttf2woff())
        // куда ложить готовый результат и перезагр сервера(перезапуск)
            .pipe($.gulp.dest($.path.build.fonts)).on('end', $.bs.reload))