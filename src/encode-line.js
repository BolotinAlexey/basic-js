const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  let res = [str.slice(0, 1)];
  const strArr = str.split("");
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] !== res.at(-1).slice(-1)) res.push(strArr[i]);
    else {
      const digit = +res.pop().slice(0, 1);
      const count = isNaN(digit) ? 2 : digit + 1;
      res.push(count + strArr[i]);
    }
  }
  return res.join("");
}

module.exports = {
  encodeLine,
};
