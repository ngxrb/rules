module.exports = {
  extends: ["tslint-sonarts", "tslint-eslint-rules"],
  rules: {
    /**************************************************************************
     * Class and member design
     *************************************************************************/
    "adjacent-overload-signatures": true,
    "member-access": true,
    "member-ordering": [
      true,
      "public-before-private",
      "static-before-instance",
      "variables-before-functions"
    ],
    "unified-signatures": true,

    /**************************************************************************
     * Interface design
     *************************************************************************/
    "no-empty-interface": true,

    /**************************************************************************
     * Function design
     *************************************************************************/
    "only-arrow-functions": [
      true,
      "allow-declarations",
      "allow-named-functions"
    ],

    /**************************************************************************
     * Types
     *************************************************************************/
    // "no-inferrable-types": false, // Prefer explicit type declaration
    "no-unnecessary-type-assertion": true,
    typedef: [
      true,
      "call-signature",
      "arrow-call-signature",
      "parameter",
      "arrow-parameter",
      "property-declaration",
      "variable-declaration",
      "member-variable-declaration",
      "object-destructuring",
      "array-destructuring"
    ],

    /*** Basic types *********************************************************/
    "ban-types": [
      true,
      ["Object", "Use the empty object type {} instead."],
      ["object", "Use the empty object type {} instead."],
      ["String", "Use string instead."],
      ["Number", "Use number instead."],
      ["Boolean", "Use boolean instead."]
    ],
    "no-any": true,
    "no-non-null-assertion": true,

    /*** Collections *********************************************************/
    "array-type": [true, "array"],
    "no-array-delete": true,
    "no-collection-size-mischeck": true,
    "no-element-overwrite": true,
    "no-sparse-arrays": true,
    // "ter-no-sparse-arrays": [true] // Duplicate of no-sparse-arrays

    /**************************************************************************
     * Assignments, variables and constants
     *************************************************************************/
    "no-magic-numbers": true,
    "no-parameter-reassignment": true,

    /**************************************************************************
     * Iterations
     *************************************************************************/
    "prefer-for-of": true,

    /**************************************************************************
     * Async
     *************************************************************************/
    // "promise-function-async": false, // Use RXJS

    /**************************************************************************
     * Imports
     *************************************************************************/
    "no-import-side-effect": true,
    "no-internal-module": true,
    "no-namespace": true,
    "no-reference": true,
    "no-var-requires": true

    /**************************************************************************
     * Style
     *************************************************************************/
    // "typedef-whitespace": false // Prettier
  }
};
