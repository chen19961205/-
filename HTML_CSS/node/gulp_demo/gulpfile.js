//引用gulp模块
//glup是分任务执行，对于项目进行打包等操作
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//const browsersync = require('browsersync');
gulp.task("first", () => {
    console.log("人生中第一个gulp任务执行");
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));
});

//1.html的文件提取+文件压缩操作  gulp-htmlmin插件
gulp.task("htmlmin", () => {
    console.log("htmlmin任务执行");
    gulp.src('./src/*.html')
        .pipe(fileInclude()) //提取公共代码   找到公共代码后新建文件，在html中使用@@include('路径')
        .pipe(htmlmin({ collapseWhitespace: true })) //表示不进行换行？？
        .pipe(gulp.dest('dist'));
});

//css任务，less语法转换（less语法-->css语法)+css代码压缩
gulp.task("cssmin", () => {
    console.log("语法转换任务执行");
    gulp.src(['./src/css/*.less', './src/css/*.css']) //不要忘了中括号,这是组合生成两份css文件
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));

});

//js任务 es6->es5语法+代码压缩

gulp.task("jsmin", () => {
    console.log("js转换任务执行");
    gulp.src('./src/js/*.js') //不要忘了中括号
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify()) //压缩js代码
        .pipe(gulp.dest('dist/js'));
});

//拷贝文件夹
gulp.task("copy", () => {
    console.log("复制文件夹");
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'));
});

//构建任务
gulp.task("default", ['htmlmin', 'cssmin', 'jsmin', 'copy']);