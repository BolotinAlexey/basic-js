const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const map = new Map();
  names.forEach((el) => {
    if (map.has(el)) {
      const v = map.get(el);
      if (v === 1) map.set(el + "(1)", 1);
      map.set(el, v + 1);
      res.push(el + `(${v})`);
    } else {
      map.set(el, 1);
      res.push(el);
    }
  });
  return res;
}

module.exports = {
  renameFiles,
};
