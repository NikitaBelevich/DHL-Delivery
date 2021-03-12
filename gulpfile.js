'use strict';
//Подключение модулей
const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del'); //модуль удаления файлов
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglifyES = require('gulp-uglifyes'); //npm install gulp-uglifyes --save-dev
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
// const imagemin = require('gulp-imagemin');
const tinypng = require('gulp-tinypng-compress');
//Подключение модулей

const cssFiles = [
    './css/main-style.css',
    './css/media-querys.css'
];
//Объединение и обработка стилей--------------------------------------
gulp.task('processStyle', processStyle);
function processStyle() {
    return gulp.src(cssFiles)  //Источник
    //объединение файлов в 1
    .pipe(concat('main-style-min.css'))
    //добавление префиксов
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions'],
        cascade: false
    }))
    //минификация css
    .pipe(cleanCSS({
        level: 2
    }))
    //выходная папка для стилей
    .pipe(gulp.dest('./css/min'))
    .pipe(browserSync.stream({stream: true})) 
}
//Объединение и обработка стилей--------------------------------------

//Сжатие JS файлов библиотек----------------------------------------
// Закинуть нужные js файлы в папку js проекта, запустить таск, все файлы js минифицируются в новую папку, откуда можно брать сжатые файлы
gulp.task('processScriptLibrary', () => {
    return gulp.src('./js/*.js') //Источник
    .pipe(uglifyES({
            // toplevel: true //сильное сжатие, замена имён функций, методов и тд
    }))
    .pipe(rename({
        suffix: "-min",
    }))
    .pipe(gulp.dest('./js/min-library'))
})
//Сжатие JS файлов библиотек----------------------------------------

gulp.task('compressMainScriptFile', compressMainScriptFile);
function compressMainScriptFile() {
    return gulp.src('./js/main-script.js') //Источник
    //сжимаем файл
    .pipe(uglifyES({
        toplevel: true //сильное сжатие, замена имён функций, методов и тд
    }))
    //переименовываем, добавляем суффикс
    .pipe(rename({
        suffix: "-min",
    }))
    //выходная папка для файла
    .pipe(gulp.dest('./js/min'))
    .pipe(browserSync.stream({stream: true}))
}

//Очистка папки с обработанными изображениями
// gulp.task('cleanImg', cleanImg)
// function cleanImg() {
//     return del('./images/optimize-img/**')
// }
//Очистка папки с обработанными изображениями
//Сжатие изображений--------------------------------------------
// gulp.task('compressImages', compressImages);
// function compressImages() {
//     del('./optimize-img/**')
//     return gulp.src(['./images/**/*.png', './images/**/*.jpg'])
//     .pipe(imagemin({
//         progressive: true,
//     }))
//     .pipe(gulp.dest('./optimize-img'))
// }
//Запускать независимо
gulp.task('compressImagesTynyPNG', compressImagesTynyPNG)
function compressImagesTynyPNG() {
    del('./images/optimize-img/**')
    return gulp.src(['./images/**/*.{png,jpg,jpeg}','!./images/optimize-img/**/*.*'])
    .pipe(tinypng({
        key: 'nTMQt799Y8K9hgy89bhMC1LZPln4g57t',
        // log: true
    }))
    .pipe(gulp.dest('./images/optimize-img'))
}

// Задача для перемещения других графических файлов, которые не обрабатываются в таске выше
gulp.task('movingSvgWebp', movingSvgWebp);
function movingSvgWebp() {
    return gulp.src('./images/**/*.{svg,webp}','!./images/optimize-img/**/*.*')
    .pipe(gulp.dest('./images/optimize-img'))
}
//Сжатие изображений--------------------------------------------


//просматривать файлы
//таск для отслеживания изменений
gulp.task('watch', () => {
    browserSync.init({
        server: { //запуск локального сервера
            baseDir: "./",
        },
        notify: false,
        // port: 3100,
    });
    // gulp.watch('./images/**', gulp.parallel('compressImagesTynyPNG')); //наблюдение за images
    gulp.watch('./css/*.css', gulp.parallel('processStyle')); //наблюдение за css
    gulp.watch('./js/*.js', gulp.parallel('compressMainScriptFile')); //наблюдение за js
    gulp.watch('./**/*.html').on('change', browserSync.reload); //наблюдение за html в любых папках проекта
});


gulp.task('build', gulp.parallel('processStyle', 'compressMainScriptFile', 'compressImagesTynyPNG', 'movingSvgWebp'));
gulp.task('default', gulp.series('build', 'watch'));