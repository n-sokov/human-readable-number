module.exports = function toReadable (number) {
  
  const objectNubmersToWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  }

  if (number in objectNubmersToWord) 
    return objectNubmersToWord[number];

  let numberWord = "";

  if (number >= 100) {
    numberWord = objectNubmersToWord[Math.floor(number / 100)] + " " + "hundred" + " ";
    number = number % 100;
  }

  if (number > 0) {
    
    if (number < 20)
      return numberWord + objectNubmersToWord[number];

    numberWord = numberWord + objectNubmersToWord[Math.floor(number / 10) * 10];
    number = number % 10;

    if (number > 0) {
      numberWord = numberWord + " " + objectNubmersToWord[number];
    }
  }

  return numberWord.trim();
}
