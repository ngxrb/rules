# Rules

## Class and Member design

* <a name="adjacent-overload-signatures"></a>Member **overloads** SHOULD be **consecutive** to improve readability and organization by grouping naturally related items together. [TSLint](https://palantir.github.io/tslint/rules/adjacent-overload-signatures/), [+info](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/adjacent-overload-signatures.md)

## Basic Types

* <a name="ban-types"></a>The types **`Number`**, **`String`**, **`Boolean`**, or **`Object`** SHOULD NOT be used. These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code. [TSLint](https://palantir.github.io/tslint/rules/ban-types/), [+info](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)

## Collections

* <a name="array-type"></a>**Arrays** SHOULD be defined as **`type[]`** instead of `Array<type>`. [TSLint](https://palantir.github.io/tslint/rules/array-type/)

* <a name="no-sparse-arrays"></a><a name="ter-no-sparse-arrays"></a>**Sparse arrays** (`[,]`) SHOULD be avoided, because can cause issues with parsers and also makes code harder to debug. Are also probably an accidentally duplicated comma. [TSLint](https://palantir.github.io/tslint/rules/no-sparse-arrays/), [ESLint](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terNoSparseArraysRule.md)

* <a name="no-array-delete"></a>**`delete`** SHOULD NOT be used on **arrays**, because a hole will be left in the array because the indexes/keys won't be shifted to reflect the deletion. Use `splice`, `pop` or `shift` instead. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-array-delete.md)

* <a name="no-element-overwrite"></a>Collections elements SHOULD NOT be **overwritten unconditionally**. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-element-overwrite.md)

* <a name="no-collection-size-mischeck"></a>**Collection size** and **array length** are always greater than or equal to zero and SHOULD be no used in comparisons. Check the non-emptiness instead. [SonarTS](https://github.com/SonarSource/SonarTS/blob/master/sonarts-core/docs/rules/no-collection-size-mischeck.md)

## Comments and documentation
