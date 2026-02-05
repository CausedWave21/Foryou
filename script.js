const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.getElementById("buttons");
const form = document.getElementById("form");
const cat = document.getElementById("cat");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  form.style.display = "block";
  cat.textContent = "😺";
  cat.style.transform = "scale(1.2)";
});

submitBtn.addEventListener("click", () => {
  successMsg.style.display = "block";
});
