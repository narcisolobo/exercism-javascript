// @ts-check

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

/**
 * The function colorCode accepts a string value
 * corresponding to a color-coded resistor band.
 *
 * @param {string} color the color code of the band.
 * @throws {Error}
 * @returns {number}
 */
export const colorCode = (color) => {
  color = color.toLocaleLowerCase();
  if (!COLORS.includes(color)) {
    throw new Error('Invalid color.');
  }

  return COLORS.indexOf(color);
};

/**
 * The function `decodedValue` takes in a string array
 * of color codes corresponding to resistor color bands
 * and returns a decoded number of the first two bands,
 * ignoring any extra colors.
 *
 * @param {string[]} codes the array of color codes
 * @throws {Error}
 * @returns {number}
 */
export const decodedValue = (codes) => {
  const [first, second] = codes;
  return Number(colorCode(first).toString() + colorCode(second).toString());
};
