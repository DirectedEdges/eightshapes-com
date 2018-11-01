# EightShapes.com

Running the dev environment locally requires Node 8.11.0 or higher and npm 6.3.0 or higher 

Public facing website. Master branch is automatically published to [eightshapes.com](http://eightshapes.com/) hosted on Github pages.

## EightShapes Systems Dependencies
- esds-build
    - [NPM](https://www.npmjs.com/package/esds-build)
    - [GitHub Repo](https://github.com/EightShapes/esds-build)
- esds-library
    - [NPM](https://www.npmjs.com/package/esds-library)
    - [GitHub Repo](https://github.com/EightShapes/esds-library)


## Publishing to eightshapes.com

This repository uses Github Pages to publish to https://eightshapes.com
The webroot for the site is the `gh-pages` branch.
The local development environment includes a `gulp` task designed to publish everything in your current local dev environment (including any bugs!) to https://eightshapes.com

### Steps to publish

1. As a best practice, make sure you've committed all the changes you want to deploy and pushed or merged them into the `master` branch.  
There's no code-level enforcement of this, the deploy task will simply deploy whatever state your current local environment is in.
2. From your clean, local copy of the `master` branch run the local environment from Terminal using the command: `gulp`
3. Browse around your local environment to ensure the intended changes are present and there are no sass or nunjucks compilation errors in Terminal.
4. Once satisfied the local environment is ready to deploy stop the local environment from Terminal using the command: `ctrl + C`
5. Deploy to eightshapes.com from Terminal using the command: `gulp deploy-to-gh-pages`
6. Wait a few minutes (usually less than 5) and verify your changes are present on [eightshapes.com](https://eightshapes.com)

### Troubleshooting

If you've run the `gulp deploy-to-gh-pages` command but still don't see your changes on eightshapes.com:
1. Go to the site's [github repo](https://github.com/EightShapes/eightshapes-com) and switch to the `gh-pages` branch using the web UI. Confirm your changes are present in that branch.
2. Check [Github's status page](https://status.github.com/messages) and make sure there are no issues related to "Github Pages Builds"
