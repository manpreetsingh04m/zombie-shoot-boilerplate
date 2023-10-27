const button = document.getElementById("button");
button.onclick = () => {
  location.href = "./game.html";
};
var ScoreBoard = document.getElementById("score-board");
var score=localStorage.getItem("killingScore")
ScoreBoard.textContent=score;