# eslint-config-mcsaatchi

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) used at [M&C Saatchi London](http://mcsaatchi.com/london)

#### Install on your project
```
npm install eslint-config-mcsaatchi --save-dev
```

#### Add to your local `.eslintrc`
```json
{
  "extends": "mcsaatchi"
}
```

#### Or if you are using [ES6](http://www.ecma-international.org/ecma-262/6.0/):
```json
{
  "extends": "mcsaatchi/es6"
}
```

And don't forget to install the babel-eslint:
```
npm install babel-eslint --save-dev
```

---
You can override settings from the shareable config by adding them directly into your `.eslintrc` file.
