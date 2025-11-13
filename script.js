let currentSlide = 1;
const totalSlides = 5; // change this number based on how many slides you have

function updateButtons() {
  document.getElementById("backBtn").style.display = currentSlide === 1 ? "none" : "inline-block";
  document.getElementById("nextBtn").style.display = currentSlide === totalSlides ? "none" : "inline-block";
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    changeSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    changeSlide(currentSlide - 1);
  }
}

function changeSlide(newSlide) {
  const image = document.getElementById("slideImage");
  image.classList.add("fade-out");

  setTimeout(() => {
    currentSlide = newSlide;
    image.src = `images/slide${currentSlide}.png`;
    image.classList.remove("fade-out");
    updateButtons();
  }, 300);
}

// Initialize buttons on load
window.onload = updateButtons;
