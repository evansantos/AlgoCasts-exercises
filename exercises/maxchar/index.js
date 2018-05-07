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
  return Object.entries(chars).sort(
    (value, comparator) => {
      return value[1] > comparator[1] ? -1 : 1;
    }
  )[0][0];
}

module.exports = maxChar;
