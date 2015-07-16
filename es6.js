module.exports = {
  "extends": "./.eslintrc-defaults",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "Modernizr": true,
    "ga": true
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
    "object-shorthand": [
      1,
      "always"
    ]
  }
}
