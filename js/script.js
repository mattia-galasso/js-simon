//? Recupero gli elementi del DOM
const countdown = document.getElementById("countdown");
const userInstructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.querySelectorAll("#input-group input");
const message = document.getElementById("message");

// Global Variables
let isCountdownTime = 30;
let numberQuantity = 5;
let minRandomNumber = 1;
let maxRandomNumber = 50;
const userNumbers = [];
let correctNumbers = 0;
const isCorrectNumbers = [];
let finalMessage = "";

// Invoco la funzione dell'array di 5 numeri randomici
const isNumbersArray = randomNumbersList(
  numberQuantity,
  minRandomNumber,
  maxRandomNumber
);

// I numeri generati vengono mostrati nel DOM
for (let i = 0; i < isNumbersArray.length; i++) {
  numbersList.innerHTML += `<li>${isNumbersArray[i]}</li>`;
}

// Creo l' intervallo di tempo per il countdown
const intervalCountdown = setInterval(countdownTime, 1000);
countdownTime();

// Creo l'evento al invio del form inputs
answersForm.addEventListener("submit", handleCountdownFormSubmit);
