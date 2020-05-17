let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let sass = require("gulp-sass");
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');

gulp.task("watch-all",async ()=>{
    // gulp.watch(["./*.html","./js/**/*","./images/**/*","./php/**/*","./css/**/*"], async ()=>{
    //     gulp.src("./*.html")
    //     .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    //     gulp.src("./js**/**")
    //     .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    //     gulp.src("./images**/**")
    //     .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    //     gulp.src("./php**/**")
    //     .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    //     gulp.src("./css**/**")
    //     .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    // })

    gulp.watch("./*.html",async ()=>{
        var options = {
            removeComments: true,  //清除HTML注释
            collapseWhitespace: true,  //压缩HTML
            collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
            removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
            minifyJS: true,  //压缩页面JS
            minifyCSS: true  //压缩页面CSS
        };
        gulp.src("./*.html")
        .pipe(htmlmin(options))
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    });

    gulp.watch("./css/*.css", async ()=>{
        gulp.src("./css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi\\css"))
    })

    gulp.watch("./css/*.scss",async ()=>{
        gulp.src("./css/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi\\css"));
    });

    gulp.watch("./js/*.js",async ()=>{
        gulp.src("./js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
         }))
        .pipe(uglify())
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi\\js"))
    });
})