# EightShapes.com

## Running locally

Running the dev environment locally requires Node 8.11.0 or higher and npm 6.3.0 or higher

1. clone this repo
2. `npm install` - you may encounter warnings, they're safe to ignore
3. `npm start`

## Dependencies

- [esds-library](https://github.com/EightShapes/esds-library)

## Publishing to eightshapes.com

`gulp deploy-to-gh-pages`

### Troubleshooting

If you've run the `gulp deploy-to-gh-pages` command but still don't see your changes on eightshapes.com:

1. Go to the site's [github repo](https://github.com/EightShapes/eightshapes-com) and switch to the `gh-pages` branch using the web UI. Confirm your changes are present in that branch.
2. Check [Github's status page](https://www.githubstatus.com) and make sure there are no issues related to "Github Pages Builds"
