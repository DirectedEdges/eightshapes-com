const fs = require("fs-extra");
const del = require("del");
const execSync = require("child_process").execSync;
const repoUrl = "git@github.com:EightShapes/eightshapes-com.git";

// Remove the /tmp directory if it already exists
if (fs.existsSync("tmp")) {
  del.sync(["tmp"], { force: true });
}

// Clone the gh-pages branch into the /tmp directory
execSync(`git clone --single-branch -b gh-pages ${repoUrl} tmp`, {
  stdio: "inherit",
});

// Build the latest release into the /_site directory
execSync("npm run build", {
  stdio: "inherit",
});

// Rsync /_site into /tmp
execSync("rsync -a _site/ tmp/", {
  stdio: "inherit",
});

// // Commit the changes to the gh-pages repo in tmp
// execSync(
//   'cd tmp && git add --all && git commit -m "Deploy release to gh-pages branch" && git push',
//   {
//     stdio: "inherit",
//   }
// );

// Remove /tmp directory
del.sync(["tmp"], { force: true });
