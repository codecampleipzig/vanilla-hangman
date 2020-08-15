const randomWord = () => {
  const words = [
    "conductor",
    "gate",
    "impress",
    "promise",
    "amuse",
    "monstrous",
    "foster",
    "view",
    "ask",
    "look",
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const maxNumWrongGuesses = 7;
let word = "";

let correctGuesses = [];
let wrongGuesses = [];

const updateRevealedWord = () => {
  const revealedWord = word
    .split("")
    .map((letter) =>
      correctGuesses.includes(letter.toUpperCase()) ? letter : "_"
    )
    .join("");

  document.getElementById("revealed-word").textContent = revealedWord;

  if (revealedWord == word) {
    document.getElementById(
      "message-content"
    ).innerHTML = `<h1>Congrats! You survived</h1><p>The word was <strong>${word}</strong></p>`;
    document.querySelector(".message").classList.remove("hidden");
  }
};

const updateHangman = () => {
  const numWrongGuesses = wrongGuesses.length;

  document.getElementById(
    "hangman"
  ).textContent = `${numWrongGuesses} / ${maxNumWrongGuesses}`;

  if (numWrongGuesses >= maxNumWrongGuesses) {
    document.getElementById(
      "message-content"
    ).innerHTML = `<h1>Sorry...you are dead</h1><p>The word was <strong>${word}</strong></p>`;
    document.querySelector(".message").classList.remove("hidden");
  }
};

const guess = (letter) => {
  if (correctGuesses.includes(letter) || wrongGuesses.includes(letter)) {
    return;
  }

  document
    .querySelector(`button[data-letter="${letter}"]`)
    .classList.add("disabled");

  if (word.toUpperCase().includes(letter)) {
    correctGuesses.push(letter);
    updateRevealedWord();
  } else {
    wrongGuesses.push(letter);
    updateHangman();
  }
};

const startGame = () => {
  word = randomWord();
  correctGuesses = [];
  wrongGuesses = [];
  updateRevealedWord();
  updateHangman();
  document
    .querySelectorAll(".letter")
    .forEach((button) => button.classList.remove("disabled"));
};

document.querySelectorAll(".letter").forEach((button) =>
  button.addEventListener("click", () => {
    guess(button.dataset.letter);
  })
);

document.getElementById("start-game").addEventListener("click", () => {
  document.querySelector(".message").classList.add("hidden");
  startGame();
});

document.addEventListener("keyup", (event) => {
  const key = event.key.toUpperCase();

  if (key.length != 1 || key < "A" || key > "Z") return;
  guess(key);
});

startGame();
