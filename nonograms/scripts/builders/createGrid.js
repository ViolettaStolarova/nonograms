import { createElement } from "../utils.js";
import { templates } from "../templates.js";
import { grid } from "../index.js";
import { startTimer, timer } from "../gameHelpers/timer.js";
import { isWin } from "../gameHelpers/isWin.js";
import { openWinPopup } from "../popups/winPopup.js";
import { clickSound, xClickSound, winSound } from "../gameHelpers/sounds.js";
import {
  unblockResetBtn,
  unblockSaveBtn,
  unblockThemesBtns,
} from "../gameHelpers/getSolution.js";
import { getColumnHints, getRowHints } from "../gameHelpers/getTemplateInfo.js";

export function addCellHints(templateIndex) {
  const rowHints = document.querySelectorAll(".row-hint.cell");
  const columnHints = document.querySelectorAll(".column-hint.cell");

  const rowHintsFromTemplate = getRowHints(templateIndex);
  const columnHintsFromTemplate = getColumnHints(templateIndex);

  const bodyBackgroundColor = document.body.style.backgroundColor;

  columnHints.forEach((hint, index) => {
    hint.innerText = columnHintsFromTemplate[index];
    hint.style.backgroundColor = bodyBackgroundColor;
    if (
      bodyBackgroundColor ===
      window.getComputedStyle(document.querySelector(".dark-theme"))
        .backgroundColor
    ) {
      hint.style.color = "#fff";
    }
  });

  rowHints.forEach((hint, index) => {
    hint.innerText = rowHintsFromTemplate[index];
    hint.style.backgroundColor = bodyBackgroundColor;
    if (
      bodyBackgroundColor ===
      window.getComputedStyle(document.querySelector(".dark-theme"))
        .backgroundColor
    ) {
      hint.style.color = "#fff";
    }
  });
}

export function createGrid(size, templateIndex) {
  unblockResetBtn();
  unblockSaveBtn();
  unblockThemesBtns();

  const container = document.querySelector(".container");
  const cellContainer = createElement({
    elementName: "div",
    className: "cell-container",
  });
  container.append(cellContainer);

  for (let i = 0; i <= size; i++) {
    let cellRow = document.createElement("div");
    for (let j = 0; j <= size; j++) {
      let cell = document.createElement("div");
      cell.className = "cell notHint";

      if (i === 0) {
        cell.className = "cell cell-hint row-hint";
      }
      if (j === 0) {
        cell.className = "cell cell-hint column-hint";
      }
      if (i === 0 && j === 0) {
        cell.classList.add("corner");
        cell.classList.toggle("cell");
      }

      if ((j - 1) % 5 === 0 && j !== size - 1) {
        let divider = document.createElement("div");
        divider.className = "divider divider-row";
        cellRow.appendChild(divider);
      }

      cellRow.append(cell);
    }

    if ((i - 1) % 5 === 0 && i !== size - 1) {
      let divider = document.createElement("div");
      divider.className = "divider divider-column";
      cellContainer.appendChild(divider);
    }

    cellContainer.append(cellRow);
  }

  let isSetTimer = true;
  function handleLeftClick(cell) {
    if (isSetTimer) {
      clearInterval(timer.interval);
      timer.interval = setInterval(startTimer, 1000);
      isSetTimer = false;
    }
    clickSound.play();
    if (cell.classList.contains("marked")) {
      cell.style.backgroundColor = "#fff";
      cell.classList.remove("marked");
    } else {
      cell.style.backgroundColor = "#000";
      cell.classList.add("marked");
      cell.innerText = "";
      cell.classList.remove("crossed");
    }
    if (isWin()) {
      winSound.play();
      openWinPopup();
    }
  }

  function handleRightClick(event, cell) {
    event.preventDefault();
    if (isSetTimer) {
      clearInterval(timer.interval);
      timer.interval = setInterval(startTimer, 1000);
      isSetTimer = false;
    }
    xClickSound.play();
    if (cell.classList.contains("crossed")) {
      cell.innerText = "";
      cell.classList.remove("crossed");
    } else if (cell.classList.contains("marked")) {
      cell.style.backgroundColor = "#fff";
      cell.classList.remove("marked");
    }
    cell.innerText = "X";
    cell.classList.add("crossed");
  }

  document.querySelectorAll(".cell").forEach((cell) => {
    if (!cell.classList.contains("cell-hint")) {
      cell.addEventListener("click", () => {
        handleLeftClick(cell);
      });
    }

    cell.addEventListener("contextmenu", (event) => {
      if (!cell.classList.contains("cell-hint")) {
        handleRightClick(event, cell);
      }
    });
  });

  grid.gridSize = size;
  grid.templateIndex = templateIndex;
  console.log(templates[templateIndex].name);

  addCellHints(templateIndex);
}

function deleteGrid() {
  const cellContainer = document.querySelector(".cell-container");
  cellContainer.remove();
}

export function setGrid(size, templateIndex) {
  deleteGrid();
  createGrid(size, templateIndex);
}
