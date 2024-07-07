import {
  TEMPLATE_SIZES,
  MAX_COMPLEXITY,
  FILLED_COMPLEXITY_STAR,
  UNFILLED_COMPLEXITY_STAR,
} from "../constants.js";
import { templatesPopup } from "../index.js";
import { createElement } from "../utils.js";
import { templates } from "../templates.js";
import { setGrid } from "../builders/createGrid.js";
import { closeSettingsPopup } from "./settingsPopup.js";
import { resetTimer } from "../gameHelpers/timer.js";

export function openTemplates(gridSize) {
  templatesPopup.style.display = "flex";
  templatesPopup.classList.add("open");
  createTemplate(gridSize);
}

export function closeTemplates() {
  templatesPopup.style.display = "none";
  templatesPopup.classList.toggle("open");
}

function createTemplate(gridSize) {
  const templatesPopupContainer = document.querySelector(
    ".templates-popup-container"
  );

  let oldTemplateBtns = document.querySelectorAll(".template-btn");
  oldTemplateBtns.forEach((btn) => {
    btn.remove();
  });

  for (let i = TEMPLATE_SIZES[gridSize]; i < gridSize; i++) {
    let template = createElement({
      elementName: "button",
      className: "template-btn",
      inner: `<div class="template-name">${templates[i].name}</div>
      <div class="template-complexity">${createComplexityStars(i)}</div>`,
    });
    templatesPopupContainer.append(template);
  }

  const templateBtns = document.querySelectorAll(".template-btn");
  templateBtns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
      setGrid(gridSize, TEMPLATE_SIZES[gridSize] + btnIndex);
      resetTimer();
      closeTemplates();
      closeSettingsPopup();
    });
  });
}

export function createComplexityStars(i) {
  const complexity = templates[i].complexity;
  const stars = `${FILLED_COMPLEXITY_STAR.repeat(
    complexity
  )}${UNFILLED_COMPLEXITY_STAR.repeat(MAX_COMPLEXITY - complexity)}`;
  return stars;
}
