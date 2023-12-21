const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let isDel = false;
  let isDouble = false;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (typeof el === "string") {
      if (i > 2) {
        if (arr[i - 2] === "--discard-next") continue;
      }
      const twoWordsArray = el.slice(2).split("-");
      if (twoWordsArray[1] === "prev") {
        if (!i) continue;
        if (twoWordsArray[0] === "double") res.push(res.at(-1));
        else if (twoWordsArray[0] === "discard") res.pop();
        else res.push(el);
        continue;
      }
      if (twoWordsArray[1] === "next") {
        if (i === arr.at(-1)) continue;
        if (twoWordsArray[0] === "double") isDouble = true;
        else if (twoWordsArray[0] === "discard") isDel = true;
        else res.push(el);
        console.log("isDouble" + isDouble, res, "isDel" + isDel);
        continue;
      }
    }
    if (isDel) {
      isDel = false;
      continue;
    }
    if (isDouble) {
      isDouble = false;
      res.push(el);
    }
    res.push(el);
  }
  console.log(res);
  return res;
}

module.exports = {
  transform,
};
