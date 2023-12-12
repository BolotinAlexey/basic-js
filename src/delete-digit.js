const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  console.log(n);
  const str = n.toString();
  return str.split("").reduce((a, _, i) => {
    if (!i) return +str.slice(0, str.length - 1);
    return Math.max(a, +(str.slice(0, i - 1) + str.slice(i, str.length)));
  }, 0);
}

module.exports = {
  deleteDigit,
};
