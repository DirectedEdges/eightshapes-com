const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const frontMatterObject = require('../src/_data/systemsposts.json');

glob("src/articles/*.njk", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.


  files.forEach(file => {
    const fileName = path.parse(file).name;

    if (fileName !== '_template' && fileName !== 'index') {
      let fileContents = fs.readFileSync(file, 'UTF-8');
      const systemspostsKey = fileContents.match(/systemsposts\["(.*)"\]/);

      let frontMatter = frontMatterObject[systemspostsKey[1]];

      console.log(frontMatter);
      const articleDate = new Date(Date.parse(frontMatter.date_published));
      console.log(articleDate);

      fileContents = `---
  category : ${frontMatter.category}
  title : ${frontMatter.title}
  deck : ${frontMatter.deck}
  title_abbreviation : ${frontMatter.title_abbreviation}
  author_id : ${frontMatter.author_id}
  date : ${articleDate.getFullYear()}-${(articleDate.getMonth() + 1).toString().padStart(2, "0")}-${articleDate.getDate().toString().padStart(2, "0")}
  masthead : ${frontMatter.masthead}
  layout : article.njk
  tags : []
---
\n
{% import '../_includes/escom.njk' as escom with context %}\n${fileContents}
\n
${fileContents}`;

      fileContents = fileContents.replace(/{% extends 'templates\/article_data.njk' %}/g, '');
      fileContents = fileContents.replace(
        /{% set post = systemsposts\["(.*)"\] %}/g,
        ""
      );

      // Remove unneeded {% filter markdown %} blocks
      fileContents = fileContents.replace(/{% filter markdown %}/g, '').replace(/{% endfilter %}/g, '');

      // Replace title_image_path variable with auto - generated page.fileSlug
      fileContents = fileContents.replace(/title_image_path/g, "page.fileSlug");

      // Remove main_article block
      fileContents = fileContents.replace(
        /{% block main_article %}/g,
        ""
      ).replace(/{% endblock %}/g, "");

      // Manually check for errors, specifically with markdown code blocks with three backticks
      // Change date_published to date in front matter
      // Remove date_updated - it's only used by one article currently and may be a typo
      // Remove read_duration - it's automatically calculated based on content length using an 11ty plugin

      const outputFileName = fileName + '.md';
      fs.writeFileSync(path.join('src', 'articles', outputFileName), fileContents, 'UTF-8');
    }
  });
});