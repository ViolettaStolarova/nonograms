import { TEMPLATE_SIZES } from "../constants.js";
import { getRandomInt } from "../utils.js";
import { templates } from "../templates.js";
import { setGrid } from "../builders/createGrid.js";
import { closeTemplates } from "../popups/templatesPopup.js";
import { closeSettingsPopup } from "../popups/settingsPopup.js";
import { grid } from "../index.js";
import { resetTimer } from "./timer.js";

export function setRandomGame() {
  const gridSizes = Object.keys(TEMPLATE_SIZES);
  const randomSizeIndex = Math.floor(Math.random() * gridSizes.length);
  const gridSize = gridSizes[randomSizeIndex];

  const templateIndex =
    gridSize - getRandomInt(1, templates.length / gridSizes.length);

  grid.gridSize = gridSize;
  grid.templateIndex = templateIndex;

  const sizes = document.querySelectorAll(".size");
  sizes.forEach((s) => {
    s.classList.remove("size--active");
  });

  const sizesIndex = randomSizeIndex;
  sizes[sizesIndex].classList.add("size--active");

  setGrid(gridSize, templateIndex);
  resetTimer();
  closeTemplates();
  closeSettingsPopup();
}
