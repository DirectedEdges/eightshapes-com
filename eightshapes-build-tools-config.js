module.exports = {
    codeNamespace: "escom",
    docsPath: "pages",
    manageNunjucksEnv: function(env) {
        env.addFilter('updateobj', function(obj, key, value){
            if (obj === undefined) {
                obj = {};
            }
            obj[key] = value;
            return obj;
        });
    }
}
