//  套件定義
//  在 package.json 內引用的套件

const gulp = require('gulp');
const connect = require('gulp-connect');

// 建構工作

const webServer = async function() {
    console.log('reload');
    connect.server({
        port: 8080
    })
}

// 輸出工作

exports.default = gulp.series(webServer);