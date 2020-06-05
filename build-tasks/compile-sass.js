const sass = require('sass');
const fs = require('fs-extra');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');

fs.mkdirpSync('_site/styles');

glob("src/_styles/*.scss", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.


  files.forEach(file => {
    const fileWithoutExtension = path.parse(file).name;
    const result = sass.renderSync({
      file: file,
      sourceMap: true,
      outputStyle: 'expanded',
      outFile: path.join('_site/styles/', `${fileWithoutExtension}.css`),
      includePaths: ["node_modules"]
    });

    postcss([autoprefixer({grid: 'autoplace'})])
      .process(result.css.toString(), { from: undefined })
      .then(apResult => {
        // Write raw CSS file
        fs.writeFileSync(path.join('_site', 'styles', `${fileWithoutExtension}.css`), apResult.css);

        // Write the map
        fs.writeFileSync(path.join('_site', 'styles', `${fileWithoutExtension}.css.map`), result.map.toString());
      });
  })
});

