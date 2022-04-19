const getNumberForm = document.querySelector("#getNumber");
const maxNumberInput = document.querySelector("#maxNumber");
const guessNumberInput = document.querySelector("#guessNumber");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

function onNumberSubmit(event) {
  event.preventDefault();
  const maxNumber = parseInt(maxNumberInput.value);
  const guessNumber = parseInt(guessNumberInput.value);
  result.classList.remove(HIDDEN_CLASSNAME);
  const randomNumber = Math.ceil(Math.random() * maxNumber);
  result.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.<br>`;
  if (guessNumber === randomNumber) {
    result.innerHTML += "<b>You won!</b>";
  } else {
    result.innerHTML += "<b>You lost!</b>";
  }
}

getNumberForm.addEventListener("submit", onNumberSubmit);
