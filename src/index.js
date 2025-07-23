module.exports = function toReadable(number) {
  const objectNubmersToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (number in objectNubmersToWord) return objectNubmersToWord[number];

  let numberWord = '';
  let numberCopy = number;

  if (numberCopy >= 100) {
    numberWord = `${objectNubmersToWord[Math.floor(numberCopy / 100)]} hundred `;
    numberCopy %= 100;
  }

  if (numberCopy > 0) {
    if (numberCopy < 20) return numberWord + objectNubmersToWord[numberCopy];

    numberWord += objectNubmersToWord[Math.floor(numberCopy / 10) * 10];
    numberCopy %= 10;

    if (numberCopy > 0) {
      numberWord = `${numberWord} ${objectNubmersToWord[numberCopy]}`;
    }
  }

  return numberWord.trim();
};
