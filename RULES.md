# Rules

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Class and member design

* <a name="adjacent-overload-signatures"></a>Member **overloads** SHOULD be **consecutive** to improve readability and organization by grouping naturally related items together. [TSLint](https://palantir.github.io/tslint/rules/adjacent-overload-signatures/), [+info](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/adjacent-overload-signatures.md)

* <a name="member-access"></a>**Visibility** MUST be explicitly **declared** for class members to help developers of other languages. [TSLint](https://palantir.github.io/tslint/rules/member-access/)

* <a name="member-ordering"></a>**Member ordering** SHOULD in the following way:

  * **Public** members should be ordered before private members.
  * **Static** members should be ordered before instance members.
  * **Variables** should be ordered before functions. [TSLint](https://palantir.github.io/tslint/rules/member-ordering/)

* <a name="unified-signatures"></a>SHOULD prefer **unifying** any two **overloads** into one, by using a union or an optional/rest parameter. [TSLint](https://palantir.github.io/tslint/rules/unified-signatures/)

## Interface design

* <a name="no-empty-interface"></a>**Empty interfaces** SHOULD NOT be used, because are equivalent to its supertype. [TSLint](https://palantir.github.io/tslint/rules/no-empty-interface/)

## Function design

* <a name="only-arrow-functions"></a>SHOULD prefer defining anonymous functions as **fat-arrow/lambda** `() => { }` functions, unless it is absolutely necessary to preserve the context in the function body. [TSLint](https://palantir.github.io/tslint/rules/only-arrow-functions/)

## Types

* Always SHOULD prefer **explicit type declaration** over type inference.

* <a name="no-unnecessary-type-assertion"></a>SHOULT NOT use a **type assertion** if it does not change the type of an expression. [TSLint](https://palantir.github.io/tslint/rules/no-unnecessary-type-assertion/)

* <a name="typedef"></a>**Type definitions** SHOULD be always used, with no implicit `any`. [TSLint](https://palantir.github.io/tslint/rules/typedef/)

### Basic types

* <a name="ban-types"></a>The **`Number`**, **`String`**, **`Boolean`**, or **`Object` types** SHOULD NOT be used. These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code. [TSLint](https://palantir.github.io/tslint/rules/ban-types/), [+info](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)

* <a name="no-any"></a>The **`any` type** SHOULD NOT be used, because nullifies the compile-time benefits of the type system. Use the empty object type `{}` or the `<T>` template types for generic type handling. [TSLint](https://palantir.github.io/tslint/rules/no-any/)

* <a name="no-non-null-assertion"></a>Using **non-null assertion**, using the `!` postfix operator, SHOULD be avoided, becausecancels the benefits of the strict null checking mode. [TSLint](https://palantir.github.io/tslint/rules/no-non-null-assertion/)

### Collections

* <a name="array-type"></a>**Arrays** SHOULD be defined as **`type[]`** instead of `Array<type>`. [TSLint](https://palantir.github.io/tslint/rules/array-type/)

* <a name="no-array-delete"></a>**`delete`** SHOULD NOT be used on **arrays**, because a hole will be left in the array because the indexes/keys won't be shifted to reflect the deletion. Use `splice`, `pop` or `shift` instead. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-array-delete.md)

* <a name="no-collection-size-mischeck"></a>**Collection size** and **array length** are always greater than or equal to zero and SHOULD be no used in comparisons. Check the non-emptiness instead. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-collection-size-mischeck.md)

* <a name="no-element-overwrite"></a>Collections elements SHOULD NOT be **overwritten unconditionally**. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-element-overwrite.md)

* <a name="no-sparse-arrays"></a><a name="ter-no-sparse-arrays"></a>**Sparse arrays** (`[,]`) SHOULD be avoided, because can cause issues with parsers and also makes code harder to debug. Are also probably an accidentally duplicated comma. [TSLint](https://palantir.github.io/tslint/rules/no-sparse-arrays/), [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoSparseArraysRule.md)

## Assignments, variables and constants

* <a name="no-magic-numbers"></a>**Magic numbers** SHOULD be avoided as they often lack documentation. Forcing them to be stored in variables gives them implicit documentation. `-1`, `0` and `1` are allowed by default. [TSLint](https://palantir.github.io/tslint/rules/no-magic-numbers/)

* <a name="no-parameter-reassignment"></a>**Assignment to parameters** SOULD be avoided, because can be misleading and lead to confusing behavior. [TSLint](https://palantir.github.io/tslint/rules/no-parameter-reassignment/), [ESLint](https://eslint.org/docs/rules/no-param-reassign)

## Iterations

* <a name="prefer-for-of"></a>SHOULD prefer **`for-of` loop** over a standard `for` loop as is easier to implement and read when the index is not needed. [TSLint](https://palantir.github.io/tslint/rules/prefer-for-of/)

## Async

* SHOULD avoid the use of **`promise`** and **`async/await`**. Use an RXJS `Observable` instead.

## Imports

* <a name="no-import-side-effect"></a>**Import** statements with **side-effect** SHOULD be avoided, because may have behavior which is hard for static verification. [TSLint](https://palantir.github.io/tslint/rules/no-import-side-effect/)

* <a name="no-internal-module"></a>SHOULD not use **internal modules**. Using `module` leads to a confusion of concepts with external modules. Use the newer namespace keyword instead. [TSLint](https://palantir.github.io/tslint/rules/no-internal-module/)

* <a name="no-namespace"></a>ES6-style **external modules** are the standard way to modularize code. SHOULD NOT use `module {}` and `namespace {}` to organize TypeScript code. [TSLint](https://palantir.github.io/tslint/rules/no-namespace/)

* <a name="no-reference"></a>Using **`/// <reference path=>` comments** to load other files is outdated. MUST use ES6-style `imports` to reference other files. [TSLint](https://palantir.github.io/tslint/rules/no-reference/)

* <a name="no-var-requires"></a>AMD-style `require([])` and CommonJS-style `require("")` MUST NOT be used. Use ES6-style import statement instead
  [TSLint](https://palantir.github.io/tslint/rules/no-var-requires/)
