import { seconds, minutes } from "../index.js";

export const timer = {
  interval: 0,
  numberOfMinutes: 0,
  numberOfSeconds: 0,
};

export const startTimer = () => {
  timer.numberOfSeconds++;

  if (timer.numberOfSeconds > 9) {
    seconds.innerText = timer.numberOfSeconds;
  } else seconds.innerText = "0" + timer.numberOfSeconds;

  if (timer.numberOfSeconds > 59) {
    timer.numberOfMinutes++;
    minutes.innerText = "0" + timer.numberOfMinutes;

    timer.numberOfSeconds = 0;
    seconds.innerText = "0" + timer.numberOfSeconds;
  }

  if (timer.numberOfMinutes > 9) {
    minutes.innerText = timer.numberOfMinutes;
  }
};

export function getMinutes() {
  return timer.numberOfMinutes;
}
export function getSeconds() {
  return timer.numberOfSeconds;
}

export function setMinutes(timerMinutes) {
  minutes.innerText = timerMinutes.toString().padStart(2, "0");
  timer.numberOfMinutes = timerMinutes;
}
export function setSeconds(timerSeconds) {
  seconds.innerText = timerSeconds.toString().padStart(2, "0");
  timer.numberOfSeconds = timerSeconds;
}

export function getTimeInSeconds() {
  return timer.numberOfMinutes * 60 + timer.numberOfSeconds;
}

export function getTime() {
  return `${timer.numberOfMinutes
    .toString()
    .padStart(2, "0")}:${timer.numberOfSeconds.toString().padStart(2, "0")}`;
}

export const resetTimer = () => {
  clearInterval(timer.interval);
  timer.numberOfMinutes = 0;
  timer.numberOfSeconds = 0;

  minutes.innerText = "00";
  seconds.innerText = "00";
};

export function convertSecondsToMinSec(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
