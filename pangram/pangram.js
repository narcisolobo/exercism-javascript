// @ts-check

/**
 * The function `isPangram` determines if a sentence is a pangram.
 *
 * A pangram is a sentence using every letter of the alphabet at least once.
 * It is case insensitive, so it doesn't matter if a letter is lower-case (e.g. k)
 * or upper-case (e.g. K).
 *
 * A sentence is a pangram if it contains each of the 26 letters in the English alphabet.
 * @param {string} sentence the sentence to test
 * @returns {boolean}
 */
export const isPangram = (sentence) => {
  if (sentence.trim().length === 0) return false;

  let alphabet = String.fromCharCode(
    ...Array.from({ length: 26 }, (_, i) => i + 97)
  );

  sentence = sentence.toLocaleLowerCase();

  for (const char of sentence) {
    if (alphabet.includes(char)) {
      alphabet = alphabet.replace(char, '');
    }
  }

  return alphabet.length === 0;
};
