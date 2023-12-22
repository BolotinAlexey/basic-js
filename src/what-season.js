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
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || date.hasOwnProperty("toString"))
    throw new Error("Invalid date!");
  try {
    return seasons[Math.floor((date.getMonth() + 1) / 3) % 4];
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
