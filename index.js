const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const computeRevealedWord = (word, correctGuesses) => {
  return word
    .split("")
    .map((letter) =>
      correctGuesses.includes(letter.toUpperCase()) ? letter : "_"
    )
    .join("");
};
