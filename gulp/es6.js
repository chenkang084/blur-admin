var gulp = require('gulp'); 
var conf = require('./conf');
var path = require('path');
var babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015");
// var browserify = require('gulp-browserify');
var browserify = require('browserify');

const uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('node-glob');
gulp.task('es6', function() {

    console.log('es6')

    // gulp.src('./src/app/test/*.js')
    //     .pipe(babel({
    //         presets: ['es2015']
    //     }))
    //     .pipe(browserify({
    //         insertGlobals: true,
    //         debug: true
    //     }))
    //     .pipe(gulp.dest(path.join('test', '/')))

    // gulp.src('./src/app/test/*.js')

    browserify({
        entries : ['./src/app/bootstrap.js'],
        debug: true
    })
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./test"));

})