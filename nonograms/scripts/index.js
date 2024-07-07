import { createPage } from "./builders/createPage.js";
import { createGrid } from "./builders/createGrid.js";
import { setTheme } from "./gameHelpers/setTheme.js";
import { getRandomInt } from "./utils.js";
import {
  openSettingsPopup,
  closeSettingsPopup,
} from "./popups/settingsPopup.js";
import {
  openStatisticsPopup,
  closeStatisticsPopup,
} from "./popups/statisticsPopup.js";
import { openTemplates, closeTemplates } from "./popups/templatesPopup.js";
import { closeWinPopup } from "./popups/winPopup.js";
import { setRandomGame } from "./gameHelpers/setRandomGame.js";
import { getSolution } from "./gameHelpers/getSolution.js";
import { resetGame } from "./gameHelpers/resetGame.js";
import { switcher } from "./gameHelpers/sounds.js";
import { saveGameState, loadGameState } from "./gameHelpers/saveGame.js";
import { notificationSound } from "./gameHelpers/sounds.js";
import { getMinutes, getSeconds } from "./gameHelpers/timer.js";
import { getGridState } from "./gameHelpers/saveGame.js";

createPage();

export const grid = {
  gridSize: -1,
  templateIndex: -1,
};

createGrid(5, getRandomInt(0, 4));

export const seconds = document.querySelector(".seconds");
export const minutes = document.querySelector(".minutes");
export const container = document.querySelector(".container");
export const allThemes = document.querySelectorAll(".theme");
export const btnsContainer = document.querySelector(
  ".save-reset-btns-container"
);
export const settingsBtn = document.querySelector(".settings");
export const settingsPopup = document.querySelector(".settings-popup");
export const statisticsBtn = document.querySelector(".statistics");
export const statisticsPopup = document.querySelector(".statistics-popup");
export const templatesPopup = document.querySelector(".templates-popup");
export const winPopup = document.querySelector(".win-popup");
const randomBtn = document.querySelector(".random-btn");
const solutionBtn = document.querySelector(".hint");
const resetBtn = document.querySelector(".reset-btn");
const saveBtn = document.querySelector(".save-btn");
export const continueBtn = document.querySelector(".continue-btn");
const blackWhiteCellsSoundSwitcher = document.querySelector(
  ".music-switch-box-cells"
);
const xCellsSoundSwitcher = document.querySelector(".music-switch-box-Xcells");
const winSoundSwitcher = document.querySelector(".music-switch-box-win");
const winPopupContainer = document.querySelector(".win-popup-container");
const statisticsPopupContainer = document.querySelector(
  ".statistics-popup-container"
);
const settingsPopupContainer = document.querySelector(
  ".settings-popup-container"
);
const templatesPopupContainer = document.querySelector(
  ".templates-popup-container"
);
const countOfTemplatesInEachGridSize = 5;

//Set theme
setTheme();

//Settings popup
settingsBtn.addEventListener("click", () => {
  if (settingsPopup.classList.contains(open)) {
    closeSettingsPopup();
  } else openSettingsPopup();
});

settingsPopup.addEventListener("click", (event) => {
  if (!settingsPopupContainer.contains(event.target)) {
    closeSettingsPopup();
  }
});

const sizes = document.querySelectorAll(".size");
sizes.forEach((size, sizeIndex) => {
  size.addEventListener("click", () => {
    sizes.forEach((s) => {
      s.classList.remove("size--active");
    });

    size.classList.add("size--active");
    grid.gridSize = (sizeIndex + 1) * countOfTemplatesInEachGridSize;

    openTemplates(grid.gridSize);
  });
});

//Templates popup
templatesPopup.addEventListener("click", (event) => {
  if (!templatesPopupContainer.contains(event.target)) {
    closeTemplates();
  }
});

// Statistics popup
statisticsBtn.addEventListener("click", () => {
  if (statisticsPopup.classList.contains(open)) {
    closeStatisticsPopup();
  } else openStatisticsPopup();
});

statisticsPopup.addEventListener("click", (event) => {
  if (!statisticsPopupContainer.contains(event.target)) {
    closeStatisticsPopup();
  }
});

//Random game
randomBtn.addEventListener("click", () => {
  setRandomGame();
});

//Get solution
solutionBtn.addEventListener("click", () => {
  getSolution();

  notificationSound.play();

  setTimeout(() => {
    alert("Select a new game in the settings)");
  }, 10);
});

//Reset button
resetBtn.addEventListener("click", () => {
  resetGame();
});

//Save button
saveBtn.addEventListener("click", () => {
  saveGameState({
    gridSize: grid.gridSize,
    templateIndex: grid.templateIndex,
    saveArray: getGridState(),
    minutes: getMinutes(),
    seconds: getSeconds(),
  });

  notificationSound.play();

  setTimeout(() => {
    alert('The game is saved!\nTo continue it, click "Continue Last Game"!');
  }, 5);
});

continueBtn.addEventListener("click", () => {
  loadGameState();

  notificationSound.play();
});

// Win popup
winPopup.addEventListener("click", (event) => {
  if (!winPopupContainer.contains(event.target)) {
    closeWinPopup();
  }
});

//Switch sounds
blackWhiteCellsSoundSwitcher.addEventListener("click", function () {
  switcher(blackWhiteCellsSoundSwitcher, 1);
});

xCellsSoundSwitcher.addEventListener("click", function () {
  switcher(xCellsSoundSwitcher, 2);
});

winSoundSwitcher.addEventListener("click", function () {
  switcher(winSoundSwitcher, 3);
});
