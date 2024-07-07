import { resetTimer, startTimer } from "./timer.js";
import { timer } from "../gameHelpers/timer.js";

export function resetGame() {
  const cells = document.querySelectorAll(".cell.notHint");

  cells.forEach((cell) => {
    cell.classList.remove("marked");
    cell.style.backgroundColor = "#fff";
    cell.innerText = "";
  });

  resetTimer();

  let isFirstClick = true;
  function handleClick() {
    if (isFirstClick) {
      clearInterval(timer.interval);
      timer.interval = setInterval(startTimer, 1000);
      isFirstClick = false;
    }
  }
  
  document
    .querySelector(".cell-container")
    .addEventListener("click", handleClick);
}
