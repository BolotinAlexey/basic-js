const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let subRes = (res = "");

  const countAdd = options.additionRepeatTimes
    ? +options.additionRepeatTimes
    : 1;

  let addition = options.addition !== undefined ? String(options.addition) : "";
  // if (options.addition === null) addition = "null";
  console.log(typeof addition);
  let additionSeparator = options.additionSeparator
    ? String(options.additionSeparator)
    : addition && addition.slice(-1) !== "+"
    ? "|"
    : "";
  additionSeparator =
    !options.additionSeparator && !options.additionRepeatTimes
      ? ""
      : additionSeparator;

  console.log("additionSeparator=" + additionSeparator, "addition=" + addition);
  for (let i = 0; i < countAdd; i++) {
    subRes += addition + additionSeparator;
  }
  if (additionSeparator) subRes = subRes.slice(0, -additionSeparator.length);
  const countMain = options.repeatTimes ? +options.repeatTimes : 1;
  console.log("subRes=", subRes);

  const separator = options.separator ? options.separator : "+";
  for (let i = 0; i < countMain; i++) {
    res += str + subRes + separator;
  }
  return res.slice(0, -separator.length);
}

module.exports = {
  repeater,
};
