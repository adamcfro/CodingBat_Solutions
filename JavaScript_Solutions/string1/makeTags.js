/**
 * Returns a string of a parameter string surrounded an HTML tag.
 * 
 * @param {String} tagName      HTML tag name
 * @param {String} str          A string parameter
 * @returns 
 */
function makeTags (tagName, str) {
  return `<${tagName}>${str}</${tagName}>`;
}