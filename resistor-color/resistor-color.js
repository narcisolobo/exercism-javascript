// @ts-check

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

export const COLORS = [
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
