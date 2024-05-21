/**
 * Helper function to determine whether a string ends
 * in a question mark or not.
 *
 * @param {string} lastChar the last character of a string
 * @returns {boolean}
 */
function isQuestion(lastChar) {
  return lastChar === '?';
}

/**
 * Helper function to determine if every letter in a
 * string is uppercase.
 *
 * @param {string} message the string to test
 * @returns {boolean}
 */
function isShouting(message) {
  const charArr = message.split('');
  for (const char of charArr) {
    if (char.toLocaleLowerCase() !== char.toLocaleUpperCase()) {
      if (char !== char.toLocaleUpperCase()) {
        return false;
      }
    }
  }
  return true;
}

console.log(isQuestion('?'));
console.log(isQuestion('.'));
console.log(isShouting('WATCH'));
console.log(isShouting('ZOMG THE %^*@#$(*^ ZOMBiES ARE COMING!!11!!1!'));
