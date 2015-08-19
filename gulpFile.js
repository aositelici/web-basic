var gulp = require('gulp');
var exec = require('child_process').exec;

var paths = ['./view-models/*', './routes/*','./model/*', './helper/*','./controller/*','./*'];

gulp.task('dbinit',function(){
  exec('mysql -u root -p123456 < ./seeds/test.sql');
});

gulp.task('start',function(){
  exec('node app.js');
  gulp.watch(paths, ['start']);
});
