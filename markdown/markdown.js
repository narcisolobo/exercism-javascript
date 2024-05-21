/**
 * Utility function to wrap text in a specified
 * HTML tag.
 *
 * @param {string} text the text content of the tag
 * @param {string} tag the html tag
 * @returns {string}
 */
function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function isTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

/**
 * Utility function to parse text with a given
 * markdown delimiter into an HTML tag.
 *
 * @param {string} markdown
 * @param {string} delimiter
 * @param {string} tag
 * @returns {string}
 */
function parseWithDelimiter(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+?)${delimiter}`, 'g');
  return markdown.replace(pattern, (_, text) => wrap(text, tag));
}

/**
 * Function to parse bold text.
 *
 * @param {string} markdown markdown text
 * @returns {string}
 */
function parseBold(markdown) {
  return parseWithDelimiter(markdown, '__', 'strong');
}

/**
 * Function to parse italic text.
 *
 * @param {string} markdown markdown text
 * @returns {string}
 */
function parseItalic(markdown) {
  return parseWithDelimiter(markdown, '_', 'em');
}

/**
 * Function to parse both bold and italic text.
 *
 * @param {string} markdown markdown text
 * @returns {string}
 */
function parseTextFormatting(markdown) {
  return parseItalic(parseBold(markdown));
}

/**
 * Function to parse a header line.
 *
 * @param {string} markdown markdown text
 * @returns {string | null}
 */
function parseHeader(markdown) {
  const headerMatch = markdown.match(/^(#+)\s*(.*)$/);
  if (!headerMatch) return null;

  const headerLevel = headerMatch[1].length;
  if (headerLevel > 6) return null;

  return wrap(headerMatch[2].trim(), `h${headerLevel}`);
}

/**
 * Function to parse a line item in a list.
 *
 * @param {string} markdown markdown text
 * @returns {string | null}
 */
function parseListItem(markdown) {
  if (!markdown.startsWith('* ')) return null;

  const listItemText = markdown.substring(2).trim();
  return wrap(parseTextFormatting(listItemText), 'li');
}

/**
 * Function to parse a paragraph.
 *
 * @param {string} markdown markdown text
 * @returns {string}
 */
function parseParagraph(markdown) {
  return wrap(parseTextFormatting(markdown), 'p');
}

/**
 * Function to parse a single line of markdown.
 *
 * @param {string} markdown markdown text
 * @param {boolean} inList
 * @returns {(string | boolean)[]}
 */
function parseLine(markdown, inList) {
  let html = parseHeader(markdown);
  if (html) {
    if (inList) html = `</ul>${html}`;
    return [html, false];
  }

  html = parseListItem(markdown);
  if (html) {
    if (!inList) html = `<ul>${html}`;
    return [html, true];
  }

  html = parseParagraph(markdown);
  if (inList) html = `</ul>${html}`;
  return [html, false];
}

/**
 * Main function to parse entire markdown content.
 *
 * @param {string} markdown markdown text
 * @returns {string}
 */
export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let inList = false;

  for (const line of lines) {
    const [parsedLine, newInList] = parseLine(line, inList);
    result += parsedLine;
    inList = newInList;
  }

  if (inList) result += '</ul>';
  return result;
}
