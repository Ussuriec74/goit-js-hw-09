const startBtnRef = document.querySelector("[data-start]");
const stopBtnRef = document.querySelector("[data-stop]");
const bodyRef = document.querySelector("body");
let intervalId;

startBtnRef.addEventListener("click", onClickStartBtn);
stopBtnRef.addEventListener("click", onClickStopBtn);

function onClickStartBtn() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    startBtnRef.removeEventListener("click", onClickStartBtn);
  }, 1000)
}

function onClickStopBtn() {
  clearInterval(intervalId);
  startBtnRef.addEventListener("click", onClickStartBtn);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
