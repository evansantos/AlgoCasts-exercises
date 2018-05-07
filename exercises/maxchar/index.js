// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = str
    .split('')
    .reduce((total, letter) => {
      total[letter] ?
        total[letter]++ :
        total[letter] = 1;

      return total;
    }, {});

  return higherChar(chars);
}

function higherChar(chars) {
  let max = 0;
  let maxChar = '';

  for(let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
