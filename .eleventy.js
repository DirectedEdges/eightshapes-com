const marked = require("marked"),
  stripIndent = require("strip-indent"),
  Nunjucks = require("nunjucks"),
  readingTime = require("eleventy-plugin-reading-time"),
  pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);

  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/_scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/_images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/_styles/*.css": "styles" });

  eleventyConfig.addWatchTarget("./templates");
  eleventyConfig.addWatchTarget("src/_styles");
  eleventyConfig.setWatchThrottleWaitTime(2000);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "numeric", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      // Add a new filter using formatting tokens.
      timeZone: "z",
    },
  });

  eleventyConfig.addCollection("alphabeticalPosts", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        return item.data.title !== undefined && item.url.includes("/articles");
      })
      .sort(function (a, b) {
        return b.data.title - a.data.title;
      });
  });

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
