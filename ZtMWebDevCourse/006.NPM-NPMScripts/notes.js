//NPM
// intro
    // npm was created so devs could share js code
    // share code and creates a knowledge base
    // how npm works
        // you can search for packages on npm registry
        // contains js filel & package.js file (meta file)
        // have small js files that do one thing really well 
        // and compose to add functionality
        // benefits include expertise from others
        // but not all packages are good code & you add more 
        // bytes to your project files
        // three type of packages
            // front end , back end, CLI
    // Yarn is like NPM 
    // Why are we learning NPM scripts
        // Three must do things for building sites
            // 1. HTML + CSS + JS
            // 2. Github Repo + Git
            // 3. Package.json file (dependency mgmt)
// setting up NPM & package.json
    // DL node.js (includes npm) tk: download
    // check to see if working in terminal
        npm -v // higher than 5.5.1
        node -v // higher than 8.9.1 
    // permission errors:
        // your user doesn't have permission rights
        // sudo npm install react
        // or windows command
    // npm int to start a project and creates package.json file
    // json => file format => JavaScript object notation
// Installing & using packages
    // when we have package.json files and then use
    // npm to dl packages
    // live-server & lodash
    // Can isntall things 2 ways locally & globally from NPM
    // global means you can run on your terminal
    // live server
        npm install -g live-server  // can get a permission denied issue
        sudo npm install -g live-server // fix issues
        live-server // in background generator fold  -> loads automatically

    // lodash // local packages, extension of JavaScript
        npm install lodash 
        // package.json adds a line for lodash now since this is local scope
        // node modules is installed on directory as well
        npm install -g browserify // sudo needed, used for require syntax
        // instead of import syntax
        var _ = require('lodash') // at top of file to use it
        var array = [1,2,3,4,5]
        console.log('answer:', _.without(array, 3));

        browserify script.js > bundle.js  //coommand line
                // run this ^ when we add anything with lodash
        // browserify lets us use the require syntax so we can use stuff
        // bundle.js includes a bunch of packages without needed them all
        // must asses if the packages that are needed
        // have dependencies now, and must make sure we have versions
        // semver => symantic versioning "^4.17.4"
        // dev dependency => packages only needed for dev and testing
// Exercise: Create a portfolio
    https://github.com/cobidev/simplefolio
    https://hatchful.shopify.com/
    https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss
    // can use this project freely
    clone repo