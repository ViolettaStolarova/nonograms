import { winPopup, grid } from "../index.js";
import { getTimeInSeconds, resetTimer, getTime } from "../gameHelpers/timer.js";
import { setRandomGame } from "../gameHelpers/setRandomGame.js";
import { templates } from "../templates.js";
import { writeInLocaleStorage } from "./statisticsPopup.js";

export function openWinPopup() {
  winPopup.style.display = "flex";
  winPopup.classList.add("open");

  writeInLocaleStorage(
    templates[grid.templateIndex].name,
    templates[grid.templateIndex].complexity,
    getTimeInSeconds(),
    getWinTime()
  );

  const winTime = document.querySelector(".winTime");
  winTime.innerText = getTimeInSeconds();
  resetTimer();
}

export function closeWinPopup() {
  winPopup.style.display = "none";
  winPopup.classList.toggle("open");
  setRandomGame();
}

function getWinTime() {
  const winTime = new Date();
  winTime.getHours();
  winTime.getMinutes();
  winTime.getSeconds();
  return winTime;
}
