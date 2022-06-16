import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputDateRef = document.querySelector("#datetime-picker");
const stertBtnRef = document.querySelector("[data-start]");
const timerConteinerRef = document.querySelector(".timer");
const timerItemRef = document.querySelectorAll(".timer .field");
const dayValueRef = document.querySelector("[data-days]");
const hourValueRef = document.querySelector("[data-hours]");
const minuteValueRef = document.querySelector("[data-minutes]");
const secondValueRef = document.querySelector("[data-seconds]");
let deadlineDate;

timerConteinerRef.style.display = "flex";
timerConteinerRef.style.marginTop = "18px";
timerConteinerRef.style.color = "teal";
timerConteinerRef.style.fontSize = "40px";
timerItemRef.forEach(item => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.alignItems = "center";
  item.style.marginLeft = "20px";
})

stertBtnRef.addEventListener("click", makeTimer);

stertBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      return;
    } 
    deadlineDate = selectedDates[0];
    stertBtnRef.disabled = false;
  }
};

flatpickr(inputDateRef, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}


function makeTimer() {
 timeIntervalId = setInterval(() => {
    const difference = deadlineDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(difference);
    dayValueRef.textContent = addLeadingZero(days);
    hourValueRef.textContent = addLeadingZero(hours);
    minuteValueRef.textContent = addLeadingZero(minutes);
    secondValueRef.textContent = addLeadingZero(seconds);
    if (difference <= 999) {
      clearInterval(timeIntervalId);
      Notiflix.Notify.failure('DEADLINE!!!');
    }
 }, 1000);
}
