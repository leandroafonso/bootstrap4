var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

//compilar SASS
gulp.task('sass',function(){
        return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());

});
//mover arquivosssssssss js para src/js
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js','node_modules/jquery/dist/jquery.min.js', 
    'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());

});
//servidor para monitorar os arquivos html/scss
gulp.task('serve',['sass'],function(){
    
    browserSync.init({
        server:"./src"
    })

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
    
    gulp.watch("src/*.css").on('change',browserSync.reload);
});

gulp.task('default', ['js','serve'] );