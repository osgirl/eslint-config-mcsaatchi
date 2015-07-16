module.exports = {
  "extends": "./index.js",
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true
  },
  "rules": {
    "no-var": 1,
    "prefer-const": 2,
    "no-this-before-super": 2,
    "object-shorthand": [1, "always"]
  }
};
