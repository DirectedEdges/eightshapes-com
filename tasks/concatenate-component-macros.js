const fs = require('fs');
const glob = require('glob');

glob("src/_components/**/*.njk", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  let concatenatedContents = "{% import '../../node_modules/esds-library/components/esds.njk' as esds %}"; // Import the esds components first, so the escom components have access to them
 concatenatedContents += files.map(fn => {
    return fs.readFileSync(fn, 'UTF-8');
  }).join('\n');

  fs.writeFileSync('src/_includes/escom.njk', concatenatedContents);
});
