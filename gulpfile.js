const gulp = require('esds-build');

const fs = require('fs-extra');
const del = require('del');
const execSync = require('child_process').execSync;
const repoUrl = 'git@github.com:EightShapes/eightshapes-com.git';

gulp.task('deploy-to-gh-pages', function(done){
  // Remove the /tmp directory if it already exists
  if (fs.existsSync('tmp')) {
    del.sync(['tmp'], {force: true});
  }

  // Clone the gh-pages branch into the /tmp directory
  execSync(`git clone --single-branch -b gh-pages ${repoUrl} tmp`);

  // Build the latest release into the /docs directory
  execSync('gulp build:all');

  // Rsync /docs into /tmp
  execSync('rsync -a docs/ tmp/');

  // Commit the changes to the gh-pages repo in tmp
  execSync('cd tmp && git add --all && git commit -m "Deploy release to gh-pages branch" && git push');

  // Remove /tmp directory
  del.sync(['tmp'], {force: true});
  done();
});
