const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.getElementById("buttons");
const form = document.getElementById("form");
const cat = document.getElementById("cat");
const submitBtn = document.getElementById("submitBtn");


noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
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


