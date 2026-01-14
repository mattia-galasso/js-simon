//? Recupero gli elementi del DOM
const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.querySelectorAll("#input-group input");
const message = document.getElementById("message");

// Global Variables
let isCountdownTime = 2;
let min = 1;
let max = 50;
const isNumbersList = [];
const userNumbers = [];

// Invoco la funzione dell'array di 5 numeri randomici
const isNumbersArray = randomNumbersList(isNumbersList);

// Creo l' intervallo di tempo per il countdown
const intervalCountdown = setInterval(countdownTime, 1000);
countdownTime();

// Creo l'evento al invio del modulo con i 5 numeri
answersForm.addEventListener("submit", handleCountdownFormSubmit);

// Creo una funzione che mi genera randomicamente 5 numeri e li inserisce nella lista del DOM
function randomNumbersList(numbersArray) {
  for (let i = 0; i < 5; i++) {
    isNumbersList.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  for (let i = 0; i < isNumbersList.length; i++) {
    numbersList.innerHTML += `<li>${isNumbersList[i]}</li>`;
  }

  return isNumbersList;
}

// Creo la funzione per l'intervallo dove sottrae 1 secondo e si interrompe arrivato a 0
function countdownTime() {
  if (isCountdownTime <= 0) {
    clearInterval(intervalCountdown);
    countdown.classList.add("d-none");
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
  } else {
    countdown.innerText = isCountdownTime;
    isCountdownTime--;
  }
}

function handleCountdownFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < inputGroup.length; i++) {
    const userInput = parseInt(inputGroup[i].value);
    userNumbers.push(userInput);
  }

  console.log(userNumbers);
}
