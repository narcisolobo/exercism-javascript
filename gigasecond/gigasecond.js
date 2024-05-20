// @ts-check

/**
 * The function `gigasecond` accepts a starting date
 * as a parameter and returns a `Date` one gigasecond
 * after it.
 *
 * @param {Date} date the starting date
 * @returns {Date}
 */
export const gigasecond = (date) => {
  const gigaDate = new Date(date);
  gigaDate.setUTCSeconds(gigaDate.getUTCSeconds() + 1_000_000_000);
  return gigaDate;
};
