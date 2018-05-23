# SonarTS rules

* String literals SHOULD not be duplicated. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-duplicate-string.md).

```json
"no-duplicate-string": [true, 2]
```

* **Two branches** in a conditional structure SHOULD NOT have exactly the **same implementation**. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-duplicated-branches.md)

```json
"no-duplicated-branches": true
```

* **All branches** in a conditional structure SHOULD NOT have exactly the **same implementation**. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-all-duplicated-branches.md).

```json
"no-all-duplicated-branches": true
```

* **Logical OR** (`||`) SHOULD NOT be used in **switch cases**. Only the first argument will be considered at execution time. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-case-with-or.md).

```json
"no-case-with-or": true
```

* **Cognitive Complexity** SHOULD NOT be too high.
  It is a measure of how hard the control flow of a function is to understand. Functions with high Cognitive Complexity will be difficult to maintain. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/cognitive-complexity.md).

```json
"cognitive-complexity": [true, 15]
```

* The **Cyclomatic Complexity** of functions SHOULD NOT exceed a defined threshold. Complex code may perform poorly and can be difficult to test thoroughly. [TSLint](https://palantir.github.io/tslint/rules/cyclomatic-complexity/), [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/mccabe-complexity.md), [ESLint](https://eslint.org/docs/rules/complexity).

```json
"cyclomatic-complexity": [true, 15]
"mccabe-complexity": [true, 15]
```

* **Dead stores** SHOULD be **removed**. A dead store happens when a local variable is assigned a value that is not read by any subsequent instruction or when an object property is assigned a value that is not subsequently used. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-dead-store.md).

```json
"no-dead-store": [true, 15]
```

* SHOULD NOT use **empty destructuring pattern**. When empty curly braces or brackets are used to the right of a property name most of the time the intent was to use a default value instead. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-empty-destructuring.md)

```json
"no-empty-destructuring": true
```

* SHOULD NOT use **empty nested blocks**. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-empty-nested-blocks.md)

```json
"no-empty-nested-blocks": true
```

* Sections of **code** SHOULD NOT be **commented out**. Unused code should be deleted and can be retrieved from source control history if required. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-commented-code.md).

```json
"no-commented-code": true
```

* **Duplicate types** SHOULD NOT be used when defining a union or interaction type, because makes the code less readable. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-duplicate-in-composite.md)

```json
"no-duplicate-in-composite": true
```

* **Functions** SHOULD NOT have **too many lines** of code. If it does, tends to aggregate too many responsibilities, making them harder to understand and therefore harder to maintain. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-big-function.md), [Angular](https://angular.io/guide/styleguide#small-functions).

```json
"no-big-function": [true, 75]
```

* **Getters** and **setters** SHOULD access the **expected fields**. A setter should update the field with the corresponding name, and a getter should access the field with the corresponding name. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-accessor-field-mismatch.md).

```json
"no-accessor-field-mismatch": true
```
