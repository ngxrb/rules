# AngularRB rules

[![npm version](https://badge.fury.io/js/%40ngxrb%2Frules.svg)](https://www.npmjs.com/package/@ngxrb/rules)
[![GitHub license](https://img.shields.io/github/license/ngxrb/rules.svg)](https://github.com/ngxrb/rules/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/ngxrb/rules.svg)](https://travis-ci.org/ngxrb/rules)

AngularRB linter rules library to enforce a consistent code style.

## Installation

You can install @ngxrb/rules, and all its dependencies, using npm.

```shell
npm install @ngxrb/rules tslint tslint-sonarts tslint-eslint-rules --save-dev
```

* [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) >= 5.3.0: Improve your TSLint with the missing ESLint rules.
* [SonarTS](https://github.com/SonarSource/SonarTS) >= 1.6.0: Static code analyzer for TypeScript detecting bugs and suspicious patterns in your code.

## Usage

To use these [TSLint rules](RULES.md), use configuration inheritance via the extends keyword.

A sample configuration is shown below, where tslint.json lives adjacent to your node_modules folder:

```json
{
  "extends": ["@ngxrb/rules"],
  "rules": {
    // override tslint rules here
  }
}
```

## License

The MIT License (MIT)

Copyright (c) 2018 Ricardo Javier Barrios Díaz
