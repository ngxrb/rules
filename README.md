[![GitHub license](https://img.shields.io/github/license/ngxrb/rules.svg)](https://github.com/ngxrb/rules/blob/master/LICENSE) [![Build Status](https://travis-ci.org/ngxrb/rules.svg?branch=master)](https://travis-ci.org/ngxrb/rules) [![npm version](https://badge.fury.io/js/%40ngxrb%2Frules.svg)](https://badge.fury.io/js/%40ngxrb%2Frules)

# AngularRB rules

AngularRB linter rules library to enforce a consistent code style.

## Installation

You can install @ngxrb/rules, and all its dependencies, using npm.

```shell
npm install @ngxrb/rules tslint codelyzer tslint-sonarts tslint-eslint-rules tslint-microsoft-contrib tslint-clean-code --save-dev
```

* [Codelyzer](https://github.com/mgechev/codelyzer) >= 4.3.0: A set of tslint rules for static code analysis of Angular TypeScript projects.
* [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) >= 5.3.0: Improve your TSLint with the missing ESLint rules.
* [SonarTS](https://github.com/SonarSource/SonarTS) >= 1.6.0: Static code analyzer for TypeScript detecting bugs and suspicious patterns in your code.
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) >= 5.0.0: A set of TSLint rules used on some Microsoft projects.
* [tslint-clean-code](https://github.com/Glavin001/tslint-clean-code) >= 0.2.7: A set of TSLint rules used to enforce Clean Code practices. Inspired by Clean Code: A Handbook of Agile Software Craftsmanship.

## Usage

To use these TSLint rules, use configuration inheritance via the extends keyword.

A sample configuration is shown below, where tslint.json lives adjacent to your node_modules folder:

```json
{
  "extends": ["ngxrb-rules"],
  "rules": {
    // override tslint rules here
  }
}
```

## Rules

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### Class and Member design

### Function design

* MUST NOT allow **function declarations in nested blocks** [[doc](docs/tslint-eslint-rules.md)]
* **Arrow lambdas** MUST prefer **return as** `() => x` over `() => { return x; }` [[doc](docs/tslint-eslint-rules.md)]
* MUST require **arrow functions as callbacks** [[doc](docs/tslint-eslint-rules.md)]

### Vars

* MUST NOT allow **variable declarations in nested blocks** [[doc](docs/tslint-eslint-rules.md)]
* MUST use an **empty newline** after **variable declarations** [[doc](docs/tslint-eslint-rules.md)]

### Types

* MUST ensure that the results of **typeof** are compared against a **valid string** [[doc](docs/tslint-eslint-rules.md)]

### Collections

* MUST NOT allow **sparse arrays** [[doc](docs/tslint-eslint-rules.md)]

### Conditional structures

* MUST avoid a **duplicate case label** [[doc](docs/tslint-eslint-rules.md)]

### Error handling

* MUST NOT allow **assigning** to the **exception** in a **catch block** [[doc](docs/tslint-eslint-rules.md)]
* MUST enforce **error handling** in callbacks [[doc](docs/tslint-eslint-rules.md)]

### Conditions

* MUST NOT use **constant expressions** in **conditions** [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT use **double-negation boolean casts** in a boolean context [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT allow **comparisons** where both sides are **exactly the same** [[doc](docs/tslint-eslint-rules.md)]

### Possible errors / Bug Detection

* MUST NOT allow the use of **`__proto__` property** [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT allow use of **`javascript:` urls** [[doc](docs/tslint-eslint-rules.md)]

### Best practices / Code Smell

* MUST NOT allow **unnecessary semicolons** [[doc](docs/tslint-eslint-rules.md)]
* SHOULD avoid code that **looks like two expressions** but is actually one [[doc](docs/tslint-eslint-rules.md)]

### Comments and documentation

* MUST enforce **valid JSDoc** comments [[doc](docs/tslint-eslint-rules.md)]

### Regular expression

* SHOULD NOT use **control characters** in **regular expressions** [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT use **empty character classes** in **regular expressions** [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT allow **invalid regular expression** strings in the **`RegExp` constructor** [[doc](docs/tslint-eslint-rules.md)]
* MUST NOT allow **multiple spaces** in a **regular expression** literal [[doc](docs/tslint-eslint-rules.md)]

### Imports

* MUST enforce **sorting import declarations** within module [[doc](docs/tslint-eslint-rules.md)]

## License

The MIT License (MIT)

Copyright (c) 2018 Ricardo Javier Barrios Díaz
