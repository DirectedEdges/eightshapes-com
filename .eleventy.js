const marked = require('marked'),
      stripIndent = require('strip-indent');

module.exports = function(eleventyConfig) {
  // Nunjucks Filter
  eleventyConfig.addNunjucksFilter("updateobj", function(obj, key, value){
      if (obj === undefined) {
          obj = {};
      }
      obj[key] = value;
      return obj;
  });

  eleventyConfig.addNunjucksFilter('markdown', function(string, includeWrapper, wrapperClass) {
      var renderedMarkup = marked(stripIndent(string)),
          configWrapperClass = 'esds-markdown-wrap',
          configIncludeMarkdownWrapper = false;

      // If includeWrapper is set when the filter is called, use that value, otherwise use config defaults
      includeWrapper = typeof includeWrapper === 'undefined' ? configIncludeMarkdownWrapper : includeWrapper;

      // If a wrapperClass is set when the filter is called, use that value, otherwise use config defaults
      wrapperClass = typeof wrapperClass === 'undefined' ? configWrapperClass : wrapperClass;

      if (includeWrapper) {
          renderedMarkup = '<div class="' + wrapperClass + '">' + renderedMarkup + "</div>";
      }

      // return env.filters.safe(renderedMarkup);
      return renderedMarkup;
  });

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy({"node_modules/esds-library/dist" : "dependencies"});
  eleventyConfig.addPassthroughCopy({"node_modules/esds-library/dist/esds.svg" : "icons/esds.svg"});
  eleventyConfig.addWatchTarget("templates");
  eleventyConfig.addWatchTarget("components");
};
