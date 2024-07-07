import { templates } from "../templates.js";
import { grid } from "../index.js";
import { getCountOfBlackCells } from "./getTemplateInfo.js";

export function isWin() {
  let blackCellsCount = 0;

  const cells = document.querySelectorAll(".cell.notHint");
  cells.forEach((cell) => {
    if (cell.classList.contains("marked")) {
      blackCellsCount++;
    }
  });

  if (blackCellsCount !== getCountOfBlackCells(grid.templateIndex)) {
    return false;
  }

  for (let i = 0; i < grid.gridSize; i++) {
    for (let j = 0; j < grid.gridSize; j++) {
      const cellIndex = j * grid.gridSize + i;
      if (
        templates[grid.templateIndex].template[i][j] === 1 &&
        !cells[cellIndex].classList.contains("marked")
      ) {
        return false;
      }
      if (
        templates[grid.templateIndex].template[i][j] === 0 &&
        cells[cellIndex].classList.contains("marked")
      ) {
        return false;
      }
    }
  }
  return true;
}
