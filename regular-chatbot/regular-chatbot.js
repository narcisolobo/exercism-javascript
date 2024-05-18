// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const chatbotRegEx = /chatbot/i;
  const match = command.match(chatbotRegEx);
  if (!match || match?.index !== 0) {
    return false;
  }

  return true;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const emojiRegEx = new RegExp('emoji[0-9]+', 'gi');
  return message.replace(emojiRegEx, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const phoneRegEx = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;
  const match = number.match(phoneRegEx);
  if (!match) return `Oops, it seems like I can't reach out to ${number}`;
  return 'Thanks! You can now download me to your phone.';
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const urlRegEx = /[a-z]+\.[a-z]{2,}/g;
  return userInput.match(urlRegEx);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return fullName.replace(
    /([a-zA-Z]+), ([a-zA-z]+)/,
    'Nice to meet you, $2 $1'
  );
}
