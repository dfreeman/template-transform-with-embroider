'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type === 'parent') {
      registry.add('htmlbars-ast-plugin', require('./ast-plugin'));
    }
  },

  isDevelopingAddon() {
    return true;
  }
};
