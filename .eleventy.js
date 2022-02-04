module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);

  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/_scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/_images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/_styles/*.css": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/_icons/*.svg": "icons" });
  eleventyConfig.addPassthroughCopy({ "src/articles": "article" });
  eleventyConfig.addPassthroughCopy({ "src/components": "components" });

  eleventyConfig.addWatchTarget("./templates");
  eleventyConfig.addWatchTarget("src/_styles");
  eleventyConfig.setWatchThrottleWaitTime(2000);

  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "docs",
    },
    markdownTemplateEngine: "njk",
  };
};
