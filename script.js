const playBtn = document.getElementById("playBtn");
const playBtn2 = document.getElementById("playBtn2");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const keyboardKey = document.getElementsByClassName("kbd");

document.addEventListener("keyup", function (event) {
  let key = event.key;
  const displayKey22 = document.getElementById("displayKey");
  const displayKey2 = displayKey22.innerText.toLowerCase();

  if (key === displayKey2) {
    const scoreString = document.getElementById("score");
    const scoreNumber = parseInt(scoreString.innerText);
    const score = scoreNumber + 1;
    scoreString.innerText = score;
    setDefaultBgColor(displayKey2);
    continueGame();
  } else {
    const lifeString = document.getElementById("life");
    const lifeNumber = parseInt(lifeString.innerText);
    const life = lifeNumber - 1;
    if (lifeNumber > 1) {
      lifeString.innerText = life;
    } else {
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "block";
      const totalScore = document.getElementById("score").innerText;
      const finalScore = document.getElementById("finalScore");
      finalScore.innerText = totalScore;
    }
  }
});

function continueGame() {
  const alphabet = getRandomAlphabet();
  const displayKey = document.getElementById("displayKey");
  displayKey.innerText = alphabet;
  setBgColor(alphabet);
}

playBtn.addEventListener("click", function () {
  section1.style.display = "none";
  section2.style.display = "block";
  continueGame();
});
playBtn2.addEventListener("click", function () {
  section1.style.display = "none";
  section3.style.display = "none";
  section2.style.display = "block";
  document.getElementById("life").innerText = 4;
  document.getElementById("score").innerText = 0;
});
