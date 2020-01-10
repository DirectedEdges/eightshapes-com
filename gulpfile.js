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



function getArticleNamesManifest() {
    const articlesDirectory = './pages/articles';
    let articles = [];

    if (fs.existsSync(articlesDirectory)) {
        const articleFilenames = fs.readdirSync(articlesDirectory);
        articleFilenames.sort().forEach(fn => {
            if (fn.indexOf('.njk') !== -1 && fn.indexOf('_template') === -1 && fn.indexOf('index.njk') === -1) {
                articles.push(fn.substring(0, fn.length - 4));
            }
        });
    }

    return articles;
}

function generateArticleNameManifestFile() {
    const articleNames = getArticleNamesManifest(),
            articleNamesJson = JSON.stringify(articleNames),
            articleDataFilePath = './data/articles.json';

    fs.writeFileSync(articleDataFilePath, articleNamesJson);
}



gulp.task('build-article-name-manifest', function(done){
  generateArticleNameManifestFile();
  done();
});

gulp.task('esds-hook:pre:build:all', gulp.series('build-article-name-manifest'));
