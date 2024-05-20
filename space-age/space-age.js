// @ts-check

const PLANET_YEAR_CONVERSION_MAP = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

/**
 * Given an age in seconds, `age` calculates how old someone
 * would be on a given planet.
 *
 * @param {string} planet the desired planet
 * @param {number} ageInSeconds the given age in seconds
 * @returns {number}
 */
export const age = (planet, ageInSeconds) => {
  planet = planet.toLocaleLowerCase();
  if (!PLANET_YEAR_CONVERSION_MAP.hasOwnProperty(planet)) {
    throw new Error('Invalid planet.');
  }
  const earthYears = ageInSeconds / 31_557_600;
  return Number((earthYears / PLANET_YEAR_CONVERSION_MAP[planet]).toFixed(2));
};
