const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s2Arr = s2.split("");
  const res = s1.split("").reduce((a, b) => {
    const i = s2Arr.indexOf(b);
    if (i !== -1) {
      s2Arr[i] = "";
      return a + 1;
    }
    return a;
  }, 0);
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
