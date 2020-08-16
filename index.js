const randomWord = () => {
  const words = [
    "promise",
    "function",
    "literal",
    "expression",
    "statement",
    "operator",
    "ternary",
    "async",
    "await",
    "catch",
    "class",
    "try",
    "id",
    "object",
    "destructuring",
    "anchor",
    "defer",
    "stash",
    "merge",
    "addEventListener",
    "console",
    "setTimeout",
    "tailwind",
    "scrum",
    "agile",
    "master",
    "origin",
    "upstream",
    "checkout",
    "gitignore",
    "github",
    "vue",
    "repository",
    "https",
    "localhost",
    "ping",
    "sql",
    "docker",
    "node",
    "npm",
    "zsh",
    "terminal",
    "shell",
    "transform",
    "transition",
    "return",
    "undefined",
    "NaN",
    "variable",
    "binding",
    "argument",
    "parameter",
    "vanilla",
    "template",
    "constructor",
    "readme",
    "markdown",
    "splice",
    "classList",
    "textContent",
    "boolean",
    "null",
    "continue",
    "break",
    "iterator",
    "prototype",
    "getter",
    "TypeError",
    "browser",
    "querySelector",
    "cascading",
    "recursion",
    "loop",
    "cpu",
    "stack",
    "heap",
    "register",
    "microservice",
    "dom",
    "api",
    "ECMAScript",
    "floating",
    "bigint",
    "framework",
    "dependency",
    "state",
    "index",
    "while",
    "kill",
    "json",
    "prettier",
    "hypertext",
    "documentation",
    "deployment",
    "hash",
    "testing",
    "frontend",
    "backend",
    "visibility",
    "display",
    "opacity",
    "url",
    "path",
    "file",
    "localStorage",
    "mkdir",
    "refactoring",
    "figma",
    "docsify",
    "pixel",
    "rem",
    "exception",
    "request",
    "error",
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
