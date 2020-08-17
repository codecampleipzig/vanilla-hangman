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

const app = new Vue({
  el: "#app",
  data: {
    word: "Vuetification",
    maxNumWrongGuesses: 7,
    correctGuesses: [],
    wrongGuesses: [],
    alphabet,
  },
  methods: {
    guess(letter) {
      if (this.word.toUpperCase().includes(letter)) {
        this.correctGuesses.push(letter);
      } else {
        this.wrongGuesses.push(letter);
      }
    },
  },
  computed: {
    revealedWord() {
      return this.word
        .split("")
        .map((letter) =>
          this.correctGuesses.includes(letter.toUpperCase()) ? letter : "_"
        )
        .join("");
    },
  },
});
