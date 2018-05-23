# ESLint rules for TSLint

* MUST enforce **error handling** in callbacks. Forgetting to handle these errors can lead to some really strange behavior in your application. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/handleCallbackErrRule.md)

```json
"handle-callback-err": [true, "error"]
```

* MUST NOT use **constant expressions** in **conditions**. A constant expression as a test condition might be a typo or development trigger for a specific behavior. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noConstantConditionRule.md)

```json
"no-constant-condition": true
```

* SHOULD NOT use **control characters** in **regular expressions**. These characters are rarely used in strings, so a regular expression containing these characters is most likely a mistake. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noControlRegexRule.md)

```json
"no-control-regex": true
```

* MUST avoid a **duplicate case label**. If a switch statement has duplicate test expressions in case clauses, it is likely that a programmer copied a case clause but forgot to change the test expression. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noDuplicateCaseRule.md)

```json
"no-duplicate-case": true
```

* MUST NOT use **empty character classes** in **regular expressions**. Empty character classes in regular expressions do not match anything, they might be typing mistakes. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noEmptyCharacterClassRule.md)

```json
"no-empty-character-class": true
```

* MUST NOT allow **assigning** to the **exception** in a **catch block**. If a catch clause in a try statement accidentally (or purposely) assigns another value to the exception parameter, is impossible to refer to the error from that point on. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noExAssignRule.md)

```json
"no-ex-assign": true
```

* MUST NOT use **double-negation boolean casts** in a boolean context. Casting to a Boolean via double negation (!!) or a Boolean call is unnecessary. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noExtraBooleanCastRule.md)

```json
"no-extra-boolean-cast": true
```

* MUST NOT allow **unnecessary semicolons**. While not technically an error, extra semicolons can cause confusion when reading code. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noExtraSemiRule.md)

```json
"no-extra-semi": true
```

* MUST NOT allow **function declarations in nested blocks**. A function declaration is only allowed in the first level of a program or the body of another function, though parsers sometimes erroneously accept them elsewhere. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noInnerDeclarationsRule.md)

```json
"no-inner-declarations": [true, "both"]
```

* MUST NOT allow **variable declarations in nested blocks**. A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks. This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noInnerDeclarationsRule.md)

```json
"no-inner-declarations": [true, "both"]
```

* MUST NOT allow **invalid regular expression** strings in the **`RegExp` constructor**. An invalid string in RegExp constructors throws a SyntaxError only when the code is executed. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noInvalidRegexpRule.md)

```json
"no-invalid-regexp": true
```

* MUST NOT allow **multiple spaces** in a **regular expression** literal. Regular expressions can be very complex and difficult to understand, which is why it’s important to keep them as simple as possible in order to avoid mistakes. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noRegexSpacesRule.md)

```json
"no-regex-spaces": true
```

* SHOULD avoid code that **looks like two expressions** but is actually one. Disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noUnexpectedMultilineRule.md)

```json
"no-unexpected-multiline": true
```

* MUST enforce **sorting import declarations** within module. Make it easier for developers to read the code and find necessary imports later. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/sortImportsRule.md)

```json
"sort-imports": [true, { "ignore-case" }]
```

* **Arrow lambdas** MUST prefer **return as** `() => x` over `() => { return x; }`. It’s unnecessary to include return and {} brackets in arrow lambdas. Leaving them out results in simpler and easier to read code. [TSLint](https://palantir.github.io/tslint/rules/arrow-return-shorthand/), [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowBodyStyleRule.md)

```json
"arrow-return-shorthand": true,
"ter-arrow-body-style": [true, "as-needed", { "requireReturnForObjectLiteral": true }]
```

* MUST use an **empty newline** after **variable declarations**. Enforces a coding style where empty lines are required after `let` or `const` statements to achieve a consistent coding style across the project. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNewlineAfterVarRule.md)

```json
"ter-newline-after-var": [true]
```

* MUST NOT allow the use of **`__proto__` property**. Has been deprecated as of ECMAScript 3.1 and shouldn’t be used in the code. Use `getPrototypeOf` method instead. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoProtoRule.md)

```json
"ter-no-proto": true
```

* MUST NOT allow **comparisons** where both sides are **exactly the same**. Comparing a variable against itself is usually an error, either a typo or refactoring error. It is confusing to the reader and may potentially introduce a runtime error. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoSelfCompareRule.md)

```json
"ter-no-self-compare": true
```

* MUST NOT allow use of **`javascript:` urls**. is considered by some as a form of `eval`. Code passed in `javascript:` URLs has to be parsed and evaluated by the browser in the same way that `eval` is processed. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoScriptUrlRule.md)

```json
"ter-no-script-url": true
```

* MUST require **arrow functions as callbacks**. Arrow functions are suited to callbacks, because `this` keywords in arrow functions bind to the upper scope’s, and the notation of the arrow function is shorter than function expression’s. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terPreferArrowCallbackRule.md)

```json
"ter-prefer-arrow-callback": [true]
```

* MUST enforce **valid JSDoc** comments. JSDoc generates application programming interface (API) documentation from specially-formatted comments in code. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/validJsdocRule.md)

```json
"valid-jsdoc": [true, {
  "requireReturn": false,
  "requireParamDescription": true,
  "requireReturnDescription": true,
  "matchDescription": "^[A-Z][A-Za-z0-9\\s]*[.]$"
}]
```

* MUST ensure that the results of **typeof** are compared against a **valid string**. It is usually a typing mistake to compare the result of a typeof operator to other string literals. [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/validTypeofRule.md)

```json
"valid-typeof": true
```
