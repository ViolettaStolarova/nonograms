import { SOUNDS } from "../constants.js";

export const clickSound = new Audio();
clickSound.src = SOUNDS.click;
clickSound.classList.add("click-sound");

export const xClickSound = new Audio();
xClickSound.src = SOUNDS.xClick;
xClickSound.classList.add("xClick-sound");

export const winSound = new Audio();
winSound.src = SOUNDS.win;
winSound.classList.add("win-sound");

export const notificationSound = new Audio();
notificationSound.src = SOUNDS.notification;
notificationSound.classList.add("notification-sound");

export function muteClickSound() {
  clickSound.muted = true;
}
export function muteXClickSound() {
  xClickSound.muted = true;
}
export function muteWinAndNotificationSound() {
  winSound.muted = true;
  notificationSound.muted = true;
}

export function unmuteClickSound() {
  clickSound.muted = false;
}
export function unmuteXClickSound() {
  xClickSound.muted = false;
}
export function unmuteWinAndNotificationSound() {
  winSound.muted = false;
  notificationSound.muted = false;
}

export function switcher(element, id) {
  const musicOn = element.querySelector(".music-on");
  const musicOff = element.querySelector(".music-off");

  if (!element.classList.contains("mute")) {
    element.classList.add("mute");

    switch (id) {
      case 1:
        muteClickSound();
        break;
      case 2:
        muteXClickSound();
        break;
      case 3:
        muteWinAndNotificationSound();
        break;
    }

    musicOn.style.display = "none";
    musicOff.style.display = "flex";
  } else {
    element.classList.toggle("mute");
    switch (id) {
      case 1:
        unmuteClickSound();
        break;
      case 2:
        unmuteXClickSound();
        break;
      case 3:
        unmuteWinAndNotificationSound();
        break;
    }

    musicOff.style.display = "none";
    musicOn.style.display = "flex";
  }
}
