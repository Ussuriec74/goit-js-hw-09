import throttle from "lodash.throttle";

const startBtnRef = document.querySelector("[data-start]");
const stopBtnRef = document.querySelector("[data-stop]");
const bodyRef = document.querySelector("body");
let intervalId;

startBtnRef.addEventListener("click", throttle(onClickStartBtn,1000));
stopBtnRef.addEventListener("click", onClickStopBtn);

function onClickStartBtn() {
  startBtnRef.disabled = true;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function onClickStopBtn() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
