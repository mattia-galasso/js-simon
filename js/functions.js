/**
 * This function takes a number and a minimum and maximum range and creates an array of random numbers.
 * @param {number} quantity Amount of numbers
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @returns {array} Array of random numbers
 */
function randomNumbersList(quantity, min, max) {
  const isNumbersList = [];

  while (isNumbersList.length < quantity) {
    const isNumber = Math.floor(Math.random() * (max - min) + min);
    if (!isNumbersList.includes(isNumber)) isNumbersList.push(isNumber);
  }

  return isNumbersList;
}

/**
 * This function creates a countdown to display in the DOM
 */
function countdownTime() {
  if (isCountdownTime <= 0) {
    clearInterval(intervalCountdown);
    countdown.classList.add("d-none");
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
    userInstructions.innerText = "Inserisci i numeri visti in precedenza!";
  } else {
    countdown.innerText = isCountdownTime;
    isCountdownTime--;
  }
}

/**
 * This function is activated when the form is sent
 * @param {event} e Event that triggers the function
 */
function handleCountdownFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < inputGroup.length; i++) {
    const userInput = parseInt(inputGroup[i].value);
    if (isNumbersArray.includes(userInput)) {
      correctNumbers++;
      isCorrectNumbers.push(userInput);
    }
  }

  message.innerHTML = `Hai indovinato ${correctNumbers} Numeri! (${isCorrectNumbers.join(
    ", "
  )})`;
}
