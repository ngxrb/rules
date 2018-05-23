# TSLint rules

* **Arrow lambdas** MUST prefer **return as** `() => x` over `() => { return x; }`. It’s unnecessary to include return and {} brackets in arrow lambdas. Leaving them out results in simpler and easier to read code. [TSLint](https://palantir.github.io/tslint/rules/arrow-return-shorthand/), [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowBodyStyleRule.md)

```json
"arrow-return-shorthand": true,
"ter-arrow-body-style": [true, "as-needed", { "requireReturnForObjectLiteral": true }]
```

* SHOULD NOT use **eval()**, because opens up your code for injection attacks, debugging can be more challenging and eval'd code executes slower. [TSLint](https://palantir.github.io/tslint/rules/ban/), [ESLint](https://eslint.org/docs/rules/no-eval).

```json
"ban": [true, { "name": "eval", "message": "eval() is B.A.D." }]
```

* **Comma operator** MUST NOT be used. Using the comma operator can create a potential for many non-obvious bugs or lead to misunderstanding of code. [TSLint](https://palantir.github.io/tslint/rules/ban-comma-operator/)

```json
"ban-comma-operator": true
```

* In a binary expression, a **literal** should always be on the **right-hand side** if possible. Sticking to a consistent grammar for conditions helps keep code readable and understandable. [TSLint](https://palantir.github.io/tslint/rules/binary-expression-operand-order/)

```json
"binary-expression-operand-order": true
```

* An **interface or literal** type with **just a call signature** can be written as a **function type**. [TSLint](https://palantir.github.io/tslint/rules/callable-types/)

```json
"callable-types": true
```

* Enforces **PascalCased class and interface names**. Makes it easy to differentiate classes from regular variables at a glance. [TSLint](https://palantir.github.io/tslint/rules/class-name/)

```json
"class-name": true
```

* Enforces **formatting** rules for **single-line comments**. Helps maintain a consistent, readable style in your codebase. [TSLint](https://palantir.github.io/tslint/rules/comment-format/)

```json
"comment-format": [true, "check-space", "check-uppercase"]
```

* Enforces **JSDoc comments** for **important items** be filled out. Helps ensure important components are documented. [TSLint](https://palantir.github.io/tslint/rules/completed-docs/)

```json
"completed-docs": true
```

* Enforces **braces** for `if`/`for`/`do`/`while` statements to prevent mistakes. [TSLint](https://palantir.github.io/tslint/rules/curly/)

```json
"curly": true
```

* The **Cyclomatic Complexity** of functions SHOULD NOT exceed a defined threshold. Complex code may perform poorly and can be difficult to test thoroughly. [TSLint](https://palantir.github.io/tslint/rules/cyclomatic-complexity/), [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/mccabe-complexity.md), [ESLint](https://eslint.org/docs/rules/complexity).

```json
"cyclomatic-complexity": [true, 15]
"mccabe-complexity": [true, 15]
```

* **Deprecated APIs** should be avoided, and usage updated. Any usage of an identifier with the @deprecated JSDoc annotation will trigger a warning. [TSLint](https://palantir.github.io/tslint/rules/deprecation/)

```json
"deprecation": true
```

* Enforces **UTF-8** file encoding. [TSLint](https://palantir.github.io/tslint/rules/encoding/)

```json
"encoding": true
```

* Requires a for ... in statement to be filtered with an if statement. Prevents accidental iteration over properties inherited from an object’s prototype. [TSLint]https://palantir.github.io/tslint/rules/forin/)

```json
"forin": true
```

---

* MUST disallow **sparse arrays**. Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature to mixed tabs and spaces. Missing elements are also probably an accidentally duplicated comma. [TSLint](https://palantir.github.io/tslint/rules/no-sparse-arrays/), [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoSparseArraysRule.md)

```json
"no-sparse-arrays": true
"ter-no-sparse-arrays": [true]
```
