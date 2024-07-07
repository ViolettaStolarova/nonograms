import { SAVED_GAME_STATE_LOCALE_STORAGE_KEY } from "../constants.js";
import { setGrid } from "../builders/createGrid.js";
import { grid } from "../index.js";
import { setMinutes, setSeconds } from "./timer.js";

export function saveGameState(gameState) {
  const gameStateString = JSON.stringify(gameState);
  localStorage.setItem(SAVED_GAME_STATE_LOCALE_STORAGE_KEY, gameStateString);
}

export function loadGameState() {
  const gameStateString = localStorage.getItem(
    SAVED_GAME_STATE_LOCALE_STORAGE_KEY
  );

  if (gameStateString) {
    const gameState = JSON.parse(gameStateString);
    grid.gridSize = gameState.gridSize;
    grid.templateIndex = gameState.templateIndex;

    setGrid(gameState.gridSize, gameState.templateIndex);
    setMinutes(gameState.minutes);
    setSeconds(gameState.seconds);

    const cells = document.querySelectorAll(".cell.notHint");
    for (let i = 0; i < gameState.gridSize; i++) {
      for (let j = 0; j < gameState.gridSize; j++) {
        if (gameState.saveArray[i][j] === 1) {
          const cellIndex = j * gameState.gridSize + i;
          cells[cellIndex].classList.add("marked");
          cells[cellIndex].style.backgroundColor = "#000";
        }
        if (gameState.saveArray[i][j] === "x") {
          const cellIndex = j * gameState.gridSize + i;
          cells[cellIndex].classList.add("crossed");
          cells[cellIndex].innerText = "X";
        }
      }
    }
  } else alert("There was no saved game state!");
}

export function removeGameState() {
  localStorage.removeItem(SAVED_GAME_STATE_LOCALE_STORAGE_KEY);
}

export function getGridState() {
  let tempArray = new Array(grid.gridSize);
  for (let i = 0; i < grid.gridSize; i++) {
    tempArray[i] = new Array(grid.gridSize);
  }

  const cells = document.querySelectorAll(".cell.notHint");
  for (let i = 0; i < grid.gridSize; i++) {
    for (let j = 0; j < grid.gridSize; j++) {
      const cellIndex = j * grid.gridSize + i;
      if (cells[cellIndex].classList.contains("marked")) {
        tempArray[i][j] = 1;
      } else tempArray[i][j] = 0;
      if (cells[cellIndex].classList.contains("crossed")) {
        tempArray[i][j] = "x";
      }
    }
  }
  return tempArray;
}