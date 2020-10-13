'use strict';

//DECLARACIÓN DE CONSTANTES

const inputNumber = document.querySelector (".js-input-number");
const submitBtn = document.querySelector (".js-submit-button");
const clueEl = document.querySelector (".js-clue");
const attemptsEl = document.querySelector (".js-attempts");
let attemptsNumber = 0;

//HANDLER

//1. Generador de número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


//2. Generador de pistas 

function updateClick () {
  console.log("entro en la función updateClick");
  const random = getRandomNumber(100);
  console.log(`Mi número aleatorio es: ${random}`);
  let inputNumberValue = inputNumber.value;
  console.log(`El número introducido en el formulario es: ${inputNumberValue}`); 
  if (inputNumberValue >= 1 && inputNumberValue <= 100){
    if (inputNumberValue < random) {clueEl.innerHTML = "Demasiado bajo";}
    else if (inputNumberValue > random) {clueEl.innerHTML = "Demasiado alto";}
    else if (inputNumberValue === random) {clueEl.innerHTML = "Has ganado campeona!!";}
  }  
  else {
      clueEl.innerHTML = "El número debe estar entre 1 y 100. Prueba otra vez";
    }
  console.log (`Mi número aleatorio es: ${random} y mi número introducido es: ${inputNumberValue}`);

//3. Generador de intentos

  attemptsNumber= attemptsNumber +1;
  attemptsEl.innerHTML = attemptsNumber;
  console.log(`Mi número de intentos hasta el momento es: ${attemptsNumber}`);
}  
//Listener
submitBtn.addEventListener ("click", updateClick);