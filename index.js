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

// Create a Vue Instance
const app = new Vue({
  // Configuration of Vue
  // Pointing Vue to the right element in the HTML
  el: "#app",
  // data properties
  data: {
    message: "Hello Vue!",
  },
});
