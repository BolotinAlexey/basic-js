const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== "string") return false;
  const a = parseFloat(sampleActivity);
  if (isNaN(a) || a <= 0 || a > 15) return false;

  return Math.ceil(
    (Math.log(MODERN_ACTIVITY / a) * HALF_LIFE_PERIOD) / Math.log(2)
  );
}

module.exports = {
  dateSample,
};
