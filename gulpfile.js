import gulp from 'gulp';
import webp from 'gulp-webp';
import image from 'gulp-image';

const path = {
    src: {
        img: 'src/img/**/*.webp'
    },
    dist: {
        img: 'src/img'
    }
}

function img() {
    return gulp.src(path.src.img)
        .pipe(image())
        .pipe(gulp.dest(path.dist.img))
}

gulp.task('default', img);