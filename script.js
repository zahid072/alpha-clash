const displayInput = document.getElementById("displayInput");
displayInput.addEventListener("input", function () {
  // Convert the input value to uppercase and assign it back to the input
  displayInput.value = displayInput.value.toUpperCase();
});

// main code

const playBtn = document.getElementById("playBtn");
const playBtn2 = document.getElementById("playBtn2");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

playBtn.addEventListener("click", function () {
  section1.style.display = "none";
  section2.style.display = "block";
});
playBtn2.addEventListener("click", function () {
  section1.style.display = "none";
  section3.style.display = "none";
  section2.style.display = "block";
});
