const fs = require('fs');
const glob = require('glob');

glob("components/**/*.njk", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  const concatenatedContents = files.map(fn => {
    return fs.readFileSync(fn, 'UTF-8');
  }).join('\n');

  fs.writeFileSync('pages/_includes/escom.njk', concatenatedContents);
});
