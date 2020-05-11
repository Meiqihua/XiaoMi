let gulp = require("gulp");

gulp.task("watch-all",async ()=>{
    gulp.watch(["./*.html","./js/**/*","./images/**/*","./php/**/*"], async ()=>{
        gulp.src("./*.html")
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
        gulp.src("./js**/**")
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
        gulp.src("./images**/**")
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
        gulp.src("./php**/**")
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
        gulp.src("./css**/**")
        .pipe(gulp.dest("E:\\phpstudy_pro\\WWW\\XiaoMi"));
    })

})