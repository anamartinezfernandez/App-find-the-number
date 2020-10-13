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
  
}  
//Listener
submitBtn.addEventListener ("click", updateClick);