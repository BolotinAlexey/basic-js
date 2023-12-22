const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const seasons = ["winter", "spring", "summer", "autumn"];
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  const originalDate = new Date();
  if (!(date instanceof Date) || isNaN(date)) throw new Error("Invalid date!");

  for (const key in originalDate) {
    if (!date.hasOwnProperty(key)) throw new Error("Invalid date!");
  }
  // const originalDateArr = Object.keys(Object.getOwnPropertyNames(originalDate));
  // const arrDate = Object.keys(Object.getOwnPropertyNames(date));

  // for (let i = 0; i < originalDate.length; i++) {
  //   if (originalDateArr[i] !== arrDate[i]) throw new Error("Invalid date!");
  // }
  if (Object.getOwnPropertyNames(date).length) {
    throw Error("Invalid date!");
  }

  try {
    return seasons[Math.floor((date.getMonth() + 1) / 3) % 4];
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
