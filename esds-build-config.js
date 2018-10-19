module.exports = {
    codeNamespace: "escom",
    docsPath: "pages",
    webroot: "docs",
    latestVersionPath: "",
    manageNunjucksEnv: function(env) {
        env.addFilter('updateobj', function(obj, key, value){
            if (obj === undefined) {
                obj = {};
            }
            obj[key] = value;
            return obj;
        });
    },
    copyTasks: [
        {
            name: 'responsive-grid-demo-styles',
            sources: ['styles/responsive_grid_demo/*.css'],
            destination: 'docs/styles/responsive_grid_demo'
        },
        {
            name: 'responsive-grid-demo-scripts',
            sources: ['scripts/responsive_grid_demo/*.js'],
            destination: 'docs/scripts/responsive_grid_demo'
        },
        {
            name: 'legacy-scripts',
            sources: ['scripts/legacy/*.js'],
            destination: 'docs/scripts/legacy'
        },
        {
            name: 'github-pages-cname',
            sources: ['CNAME'],
            destination: 'docs'
        },
        {
            name: 'style-dependencies',
            sources: [`node_modules/esds-library/dist/esds.css`],
            destination: `docs/styles/dependencies`,
            watch: true
        },
        {
            name: 'icon-dependencies',
            sources: [`node_modules/esds-library/dist/esds.svg`],
            destination: `docs/icons`
        }
    ],
    dependencies: [
        {
            moduleName: 'esds-library'
        }
    ]
};
