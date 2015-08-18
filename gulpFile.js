var gulp = require('gulp');
var exec = require('child_process').exec;


gulp.task('init',function(){
  exec('mysql -u root -p123456 <./seeds/test.sql');
});

gulp.task('start',function(){
  exec('node app.js');
});

gulp.task('default', function() {

});
