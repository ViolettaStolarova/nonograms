import { LATEST_SCORES_LOCALE_STORAGE_KEY } from "../constants.js";
import { statisticsPopup } from "../index.js";
import { createComplexityStars } from "./templatesPopup.js";
import { convertSecondsToMinSec } from "../gameHelpers/timer.js";

export function openStatisticsPopup() {
  readFromLocaleStorage();
  statisticsPopup.style.display = "flex";
  statisticsPopup.classList.add("open");
}

export function closeStatisticsPopup() {
  statisticsPopup.style.display = "none";
  statisticsPopup.classList.toggle("open");
  clearStatisticsList();
}

function readFromLocaleStorage() {
  let latestScores = localStorage.getItem(LATEST_SCORES_LOCALE_STORAGE_KEY);

  if (latestScores) {
    latestScores = JSON.parse(latestScores);

    const statisticsPopupContainer = document.querySelector(
      ".statistics-popup-container"
    );

    latestScores.forEach((score, scoreIndex) => {
      const row = `<div class="statistics-list">
                   <div>${scoreIndex + 1}.</div>
                   <div class="list-item">${score.templateName}</div>
                   <div class="list-item">${createComplexityStars(
                     score.templateComplexity
                   )}</div>
                   <div class="list-item">${convertSecondsToMinSec(
                     score.timeOfGameInSeconds
                   )}</div>
                 </div>`;
      statisticsPopupContainer.innerHTML += row;
    });
  }
}

export function writeInLocaleStorage(name, complexity, timeInSeconds, winTime) {
  const result = {
    templateName: name,
    templateComplexity: complexity,
    timeOfGameInSeconds: timeInSeconds,
    winTime: winTime,
  };

  const latestScores = localStorage.getItem(LATEST_SCORES_LOCALE_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LATEST_SCORES_LOCALE_STORAGE_KEY))
    : [];

  latestScores.push(result);

  if (latestScores.length > 5) {
    latestScores.sort((a, b) => parseFloat(a.winTime) - parseFloat(b.winTime));
    latestScores.splice(1, 1);
  }

  latestScores.sort(
    (a, b) =>
      parseFloat(a.timeOfGameInSeconds) - parseFloat(b.timeOfGameInSeconds)
  );

  localStorage.setItem(
    LATEST_SCORES_LOCALE_STORAGE_KEY,
    JSON.stringify(latestScores)
  );
}

function clearStatisticsList() {
  document.querySelectorAll(".statistics-list").forEach((list) => {
    list.remove();
  });
}
