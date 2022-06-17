import Notiflix from 'notiflix';

const formRef = document.querySelector(".form");

formRef.addEventListener("submit", onFormSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit (event) {
  event.preventDefault();
  if (!event.target.tagName === 'BUTTON') return;

  const amountInput = parseInt(event.currentTarget.elements.amount.value);
  const stepInput = parseInt(event.currentTarget.elements.step.value);
  let delayInput = parseInt(event.currentTarget.elements.delay.value);

  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += stepInput;
  }

  event.currentTarget.reset();
}

