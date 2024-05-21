// @ts-check

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
  let hasLetters = false;

  const allUppercase = message.split('').every((char) => {
    if (char.toLocaleLowerCase() !== char.toLocaleUpperCase()) {
      hasLetters = true;
      return char === char.toLocaleUpperCase();
    }
    return true;
  });
  return hasLetters && allUppercase;
}

/**
 * Function `hey` determines what Bob will reply to
 * someone when they say something to him or ask him a question.
 *
 * @param {string} message the incoming message
 * @returns {string}
 */
function hey(message) {
  message = message.trim();
  if (isQuestion(message[message.length - 1]) && isShouting(message)) {
    console.log(`shouting question: ${message}`);
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message[message.length - 1])) {
    console.log(`question: ${message}`);
    return 'Sure.';
  } else if (isShouting(message)) {
    console.log(`shouting: ${message}`);
    return 'Whoa, chill out!';
  } else if (message.trim().length === 0) {
    console.log(`blank: ${message}`);
    return 'Fine. Be that way!';
  }
  return 'Whatever.';
}

export { hey };
