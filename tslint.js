module.exports = {
  extends: [
    "codelyzer",
    "tslint-clean-code",
    "tslint-eslint-rules",
    "tslint-microsoft-contrib",
    "tslint-sonarts"
  ],
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

    /**************************************************************************
     * Interface design
     *************************************************************************/
    "no-empty-interface": true,

    /**************************************************************************
     * Types
     *************************************************************************/
    // "no-inferrable-types": false, // Always use types

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
     * Imports
     *************************************************************************/
    "no-import-side-effect": true,
    "no-internal-module": true,
    "no-namespace": true,
    "no-reference": true
  }
};
