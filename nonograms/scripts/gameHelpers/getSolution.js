import { templates } from "../templates.js";
import { grid } from "../index.js";
import { resetGame } from "./resetGame.js";

export function getSolution() {
  const cells = document.querySelectorAll(".cell.notHint");
  resetGame();

  for (let i = 0; i < grid.gridSize; i++) {
    for (let j = 0; j < grid.gridSize; j++) {
      if (templates[grid.templateIndex].template[i][j] === 1) {
        const cellIndex = j * grid.gridSize + i;
        cells[cellIndex].classList.add("marked");
        cells[cellIndex].style.backgroundColor = "#000";
      }
    }
  }

  blockCellContainer();
  blockResetBtn();
  blockSaveBtn();
  blockThemesBtns();
}

function blockCellContainer() {
  document.querySelector(".cell-container").style.pointerEvents = "none";
}

function blockResetBtn() {
  const resetBtn = document.querySelector(".reset-btn");
  resetBtn.style.pointerEvents = "none";
  resetBtn.style.backgroundColor = "transparent";
}

function blockSaveBtn() {
  const saveBtn = document.querySelector(".save-btn");
  saveBtn.style.pointerEvents = "none";
  saveBtn.style.backgroundColor = "transparent";
}

function blockThemesBtns() {
  const themesBtns = document.querySelectorAll(".theme");
  themesBtns.forEach((theme) => {
    theme.style.pointerEvents = "none";
  });
}

export function unblockResetBtn() {
  const resetBtn = document.querySelector(".reset-btn");
  resetBtn.style.pointerEvents = "auto";
  resetBtn.style.backgroundColor = document.body.style.backgroundColor;
}

export function unblockSaveBtn() {
  const saveBtn = document.querySelector(".save-btn");
  saveBtn.style.pointerEvents = "auto";
  saveBtn.style.backgroundColor = document.body.style.backgroundColor;
}

export function unblockThemesBtns() {
  const themesBtns = document.querySelectorAll(".theme");
  themesBtns.forEach((theme) => {
    theme.style.pointerEvents = "auto";
  });
}
