import { createElement } from "../utils.js";
import {
  STATISTICS_STRING_SVG_ELEMENT,
  SETTINGS_STRING_SVG_ELEMENT,
  MUSIC_ON_STRING_SVG_ELEMENT,
  MUSIC_OFF_STRING_SVG_ELEMENT,
  SOLUTION_STRING_SVG_ELEMENT,
  TEMPLATE_SIZES,
} from "../constants.js";

export function createPage() {
  const container = createElement({
    elementName: "div",
    className: "container",
  });
  document.body.append(container);

  const title = createElement({
    elementName: "div",
    className: "title",
    inner: "Nonograms",
  });
  container.append(title);

  // Statistics
  const statistics = createElement({
    elementName: "div",
    className: "statistics",
    inner: STATISTICS_STRING_SVG_ELEMENT,
  });
  container.append(statistics);

  const statisticsPopup = createElement({
    elementName: "div",
    className: "popup statistics-popup",
  });
  container.append(statisticsPopup);

  const statisticsPopupContainer = createElement({
    elementName: "div",
    className: "popup-container statistics-popup-container",
  });
  statisticsPopup.append(statisticsPopupContainer);

  const statisticsPopupTitle = createElement({
    elementName: "div",
    className: "popup-title",
    inner: "Statistics",
  });
  statisticsPopupContainer.append(statisticsPopupTitle);

  //Settings
  const settings = createElement({
    elementName: "div",
    className: "settings",
    inner: SETTINGS_STRING_SVG_ELEMENT,
  });
  container.append(settings);

  const settingsPopup = createElement({
    elementName: "div",
    className: "popup settings-popup",
  });
  container.append(settingsPopup);

  const settingsPopupContainer = createElement({
    elementName: "div",
    className: "popup-container settings-popup-container",
  });
  settingsPopup.append(settingsPopupContainer);

  const settingsPopupTitle = createElement({
    elementName: "div",
    className: "popup-title",
    inner: "Settings",
  });
  settingsPopupContainer.append(settingsPopupTitle);

  const templateSizes = createElement({
    elementName: "div",
    className: "sizes-container",
  });
  settingsPopupContainer.append(templateSizes);

  Object.keys(TEMPLATE_SIZES).forEach((size, sizeIndex) => {
    const templateSize = createElement({
      elementName: "button",
      className: `size`,
      inner: `${size}х${size}`,
    });
    if (sizeIndex === 0) {
      templateSize.classList.add("size--active");
    }
    templateSizes.append(templateSize);
  });

  const randomBtn = createElement({
    elementName: "button",
    className: "random-btn",
    inner: "Random Game",
  });
  settingsPopupContainer.append(randomBtn);

  const musicSwitchContainer = createElement({
    elementName: "div",
    className: "music-switch-container",
  });
  settingsPopupContainer.append(musicSwitchContainer);

  const musicSwitchBoxForCell = createElement({
    elementName: "div",
    className: `music-switch-box music-switch-box-cells`,
    inner: `${MUSIC_ON_STRING_SVG_ELEMENT}${MUSIC_OFF_STRING_SVG_ELEMENT}`,
  });

  const musicSwitchBoxForCellText = createElement({
    elementName: "div",
    inner: "Black/White<br>Click Sound",
  });
  musicSwitchBoxForCell.append(musicSwitchBoxForCellText);
  musicSwitchContainer.append(musicSwitchBoxForCell);

  const musicSwitchBoxForXCell = createElement({
    elementName: "div",
    className: `music-switch-box music-switch-box-Xcells`,
    inner: `${MUSIC_ON_STRING_SVG_ELEMENT}${MUSIC_OFF_STRING_SVG_ELEMENT}`,
  });

  const musicSwitchBoxForXCellText = createElement({
    elementName: "div",
    inner: "X<br>Click Sound",
  });
  musicSwitchBoxForXCell.append(musicSwitchBoxForXCellText);
  musicSwitchContainer.append(musicSwitchBoxForXCell);

  const musicSwitchBoxForWin = createElement({
    elementName: "div",
    className: `music-switch-box music-switch-box-win`,
    inner: `${MUSIC_ON_STRING_SVG_ELEMENT}${MUSIC_OFF_STRING_SVG_ELEMENT}`,
  });

  const musicSwitchBoxForWinText = createElement({
    elementName: "div",
    inner: "Win<br>Sound",
  });
  musicSwitchBoxForWin.append(musicSwitchBoxForWinText);
  musicSwitchContainer.append(musicSwitchBoxForWin);

  //Solution button
  const hint = createElement({
    elementName: "button",
    className: "hint",
    inner: SOLUTION_STRING_SVG_ELEMENT,
  });
  container.append(hint);

  //Templates popup
  const templatesPopup = createElement({
    elementName: "div",
    className: "popup templates-popup",
  });
  container.append(templatesPopup);

  const templatesPopupContainer = createElement({
    elementName: "div",
    className: "popup-container templates-popup-container",
  });
  templatesPopup.append(templatesPopupContainer);

  //Win popup
  const winPopup = createElement({
    elementName: "div",
    className: "popup win-popup",
  });
  container.append(winPopup);

  const winPopupContainer = createElement({
    elementName: "div",
    className: "popup-container win-popup-container",
    inner: `Great!<br>You have solved the nonogram in <span class="winTime"></span> seconds!`,
  });
  winPopup.append(winPopupContainer);

  // Themes buttons
  const themes = createElement({ elementName: "div", className: "themes" });
  container.append(themes);

  const pinkTheme = createElement({
    elementName: "button",
    className: "theme pink-theme theme--active",
  });
  themes.append(pinkTheme);

  const darkTheme = createElement({
    elementName: "button",
    className: "theme dark-theme",
  });
  themes.append(darkTheme);

  const yellowTheme = createElement({
    elementName: "button",
    className: "theme yellow-theme",
  });
  themes.append(yellowTheme);

  const lightTheme = createElement({
    elementName: "button",
    className: "theme light-theme",
  });
  themes.append(lightTheme);

  //Timer
  const timer = createElement({
    elementName: "div",
    className: "timer",
  });
  container.append(timer);

  const timerMinutes = createElement({
    elementName: "div",
    className: "minutes",
    inner: "00",
  });
  timer.append(timerMinutes);

  const timerColon = createElement({
    elementName: "div",
    className: "colon",
    inner: "<b>:</b>",
  });
  timer.append(timerColon);

  const timerSeconds = createElement({
    elementName: "div",
    className: "seconds",
    inner: "00",
  });
  timer.append(timerSeconds);

  //Continue game button
  const continueBtn = createElement({
    elementName: "button",
    className: "btn continue-btn",
    inner: "Continue Last Game",
  });
  container.append(continueBtn);

  //Reset button and Save button
  const saveAndResetBtnsContainer = createElement({
    elementName: "div",
    className: "save-reset-btns-container",
  });
  container.append(saveAndResetBtnsContainer);

  const resetBtn = createElement({
    elementName: "button",
    className: "btn reset-btn",
    inner: "Reset Game",
  });
  saveAndResetBtnsContainer.append(resetBtn);

  const saveBtn = createElement({
    elementName: "button",
    className: "btn save-btn",
    inner: "Save Game",
  });
  saveAndResetBtnsContainer.append(saveBtn);
}
