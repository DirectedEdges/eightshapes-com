const purify = require("purify-css");

var content = ["docs/articles/**/*.html"];
var css = ["docs/styles/escom.css"];

var options = {
  // Will write purified CSS to this file.
  output: "purified.css",
};

purify(content, css, options);
