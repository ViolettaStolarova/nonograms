import { settingsPopup } from "../index.js";

export function openSettingsPopup() {
  settingsPopup.style.display = "flex";
  settingsPopup.classList.add("open");
}

export function closeSettingsPopup() {
  settingsPopup.style.display = "none";
  settingsPopup.classList.toggle("open");
}
