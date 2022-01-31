# EightShapes.com

## Running locally

Running the dev environment locally requires Node 8.11.0 or higher and npm 6.3.0 or higher

1. clone this repo
2. `npm install` - you may encounter warnings, they're safe to ignore
3. `npm start`

## Dependencies

- [esds-library](https://github.com/EightShapes/esds-library)

## Publishing to eightshapes.com

The site automatically builds to the `/docs` directory in the root of the project. Github watches that directory for changes and will deploy anything new that's committed to the __master__ branch's `/docs` directory.

### Troubleshooting

If you've committed changes to the __master__ branch's `/docs` directory but still don't see your changes on eightshapes.com:

1. Check the status of the repo's [Github Pages](https://github.com/EightShapes/eightshapes-com/settings/pages) settings and make sure it says it's deployed the latest.
1. Check [Github's status page](https://www.githubstatus.com) and make sure there are no issues related to "Github Pages Builds"
