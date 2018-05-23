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
     * Class and Member design
     *************************************************************************/
    "adjacent-overload-signatures": true,
    /**************************************************************************
     * Basic Types
     *************************************************************************/
    "ban-types": [
      true,
      ["Object", "Use {} instead."],
      ["object", "Use {} instead."],
      ["String", "Use string instead."],
      ["Number", "Use number instead."],
      ["Boolean", "Use boolean instead."]
    ],
    /**************************************************************************
     * Collections
     *************************************************************************/
    "array-type": [true, "array"],
    "no-sparse-arrays": true,
    // "ter-no-sparse-arrays": [true] // Duplicate of no-sparse-arrays
    "no-array-delete": true,
    "no-element-overwrite": true,
    "no-collection-size-mischeck": true
    /**************************************************************************
     * Comments and documentation
     *************************************************************************/
  }
};
