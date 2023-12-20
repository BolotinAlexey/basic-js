const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSet = arr.reduce((a, b, i) => (b === -1 ? [...a, i] : a), []);
  const sortArr = arr.filter((el) => el !== -1).sort((a, b) => b - a);
  const res = [];
  arr.forEach((el, i) => {
    if (arrSet.includes(i)) res.push(-1);
    else res.push(sortArr.pop());
  });
  return res;
}

module.exports = {
  sortByHeight,
};
