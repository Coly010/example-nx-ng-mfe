const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./mfe.config');
module.exports = withModuleFederation(config);
