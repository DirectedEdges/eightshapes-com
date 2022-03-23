# EightShapes.com

## Prerequisites
1. Install NPM before attempting to run the dev environment locally. Go to https://nodejs.org/en/ and install the "LTS" version using the instructions there.

## Running locally

Running the dev environment locally requires Node 8.11.0 or higher and npm 6.3.0 or higher

1. clone this repo
2. `npm install` - you may encounter warnings, they're safe to ignore
3. `npm start`

## Stopping the local environment
1. `ctrl + C` will stop the build and server processes from running.

## Making changes
Nunjucks (.njk) files in the `/src` directory comprise the site. Each .njk file is compiled to HTML by 11ty. To edit site content or markup, run the dev environment locally (`npm start`) and make changes to the .njk files.

### Style changes
Styles for the entire site are found in `/src/_styles/escom.scss`. Make changes to this scss file and the build tooling will automatically recompile the scss to css. Autoprefixer is also enabled on the scss build toolchain.

### Pass through assets
* All files in `/src/_images` are automatically copied to the webroot `/images` directory.
* All files in `/src/_articles` are automatically copied to the webroot `/articles` directory.
* `/src/_styles/articles.css` is automatically copied to `/styles/articles.css`.
* The CNAME file at `/src/CNAME` is automatically copied to `./CNAME`.
* All `.svg` files in `/src/_icons` are automatically copied to the webroot `/icons` directory.
* There are currently no scripts on the site, but anything added to a `/src/_scripts` directory will automatically be copied to the webroot `/scripts` directory.

## Build Tooling Details
### 11ty config
the file `./eleventy.js` at the root of the project contains all the configuration for nunjucks compilation and asset pass through copying.

### SCSS compilation
A custom script at `./build-tasks/compile-sass.js` is responsible running the scss compiler and the autoprefixer plugin. An npm watch script uses a dependency called [chokidar](https://www.npmjs.com/package/chokidar) to monitor the `escom.scss` file for changes and invoke the build script whenever the file is changed.

## Dependencies

- [11ty](https://www.11ty.dev)
- [sass](https://www.npmjs.com/package/sass)

## Publishing to eightshapes.com

1. `npm run build` will compile the scss and njk files to CSS and HTML into the `/docs` directory in the root of the project.
2. `git commit` will commit the latest changes to the github repository.
3. Github watches the __master__ branch's `/docs` directory for changes. As soon as changes are committed to that directory, Github will automatically deploy changes to eightshapes.com

## Google Analytics
The base layout at `src/_layouts/base.njk` includes a Google Analytics snippet from `src/_includes/_google_analytics.html` at the bottom of every page.

### Troubleshooting

If you've committed changes to the __master__ branch's `/docs` directory but still don't see your changes on eightshapes.com:

1. Check the status of the repo's [Github Pages](https://github.com/EightShapes/eightshapes-com/settings/pages) settings and make sure it says it's deployed the latest.
2. Check [Github's status page](https://www.githubstatus.com) and make sure there are no issues related to "Github Pages Builds"

## eightshapes.com domain configuration
* DNS Hosting is located at [DNSimple](https://dnsimple.com). This DNS hosting is what points "eightshapes.com" to the github pages server.
* The CNAME file in `/src/CNAME` tells Github pages to use eightshapes.com as the domain for the site.

