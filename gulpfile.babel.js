import gulp from "gulp";
import gpug from "gulp-pug";

const routes = {
  pug: {
    src: "src/**/*.pug",
    build: "build"
  }
};

export const pug = () => gulp
  .src(routes.pug.src)
  .pipe(gpug())
  .pipe(gulp.dest(routes.pug.build));

export const dev = gulp.series([pug]);