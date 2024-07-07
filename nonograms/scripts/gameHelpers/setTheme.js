import { container, allThemes, btnsContainer, continueBtn } from "../index.js";

const changeColor = (color) => {
  const elementsToUpdate = document.querySelectorAll([".hint", ".cell.row-hint", ".cell.column-hint", ".svg", ".btn", ".timer", ".title"]);
  elementsToUpdate.forEach((element) => {
    element.style.color = color;
    element.style.fill = color;
  });
};

const updateBackgroundAndBorder = (color, backgroundColor) => {
  document.body.style.backgroundColor = backgroundColor;
  container.style.backgroundColor = color;
  document.querySelectorAll(".cell-hint:not(.corner)").forEach((hint) => {
    hint.style.backgroundColor = backgroundColor;
  });
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.style.backgroundColor = backgroundColor;
    btn.style.borderColor = backgroundColor;
  });
  continueBtn.style.backgroundColor = backgroundColor;
  continueBtn.style.borderColor = backgroundColor;
};

export function setTheme () {
  allThemes.forEach((theme) => {
    theme.addEventListener("click", (event) => {
      allThemes.forEach((theme) => theme.classList.remove("theme--active"));
      theme.classList.add("theme--active");
      
      const { backgroundColor, color } = window.getComputedStyle(event.target);
      const isDarkThemeActive = backgroundColor === window.getComputedStyle(document.querySelector(".dark-theme")).backgroundColor;
      const newColor = isDarkThemeActive ? "#fff" : "#000";

      changeColor(newColor);
      updateBackgroundAndBorder(color, backgroundColor);
    });
  });
};
