const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.getElementById("buttons");
const form = document.getElementById("form");
const cat = document.getElementById("cat");
const submitBtn = document.getElementById("submitBtn");

const noTexts = [
  "No",
  "Please",
  "Please 🥺",
  "Pretty please",
  "The cat says please",
  "Don’t do this to the cat 😿",
  "Okay but… please?",
  "Fine… I tried 😔"
];

let noIndex = 0;

function moveNoButton() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noIndex = (noIndex + 1) % noTexts.length;
  noBtn.textContent = noTexts[noIndex];
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile tap
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  form.style.display = "block";
  cat.textContent = "😺";
  cat.style.transform = "scale(1.2)";
  music.volume = 0.25;
  music.play();
});


const formEl = document.getElementById("form");
const successMsg = document.getElementById("successMsg");

formEl.addEventListener("submit", () => {
  successMsg.style.display = "block";
});



