'use strict';

//DECLARACIÓN DE CONSTANTES
const inputNumber = document.querySelector (".js-input-number");
const submitBtn = document.querySelector (".js-submit-button");
const clueEl = document.querySelector (".js-clue");
const attemptsEl = document.querySelector (".js-attempts");


//HANDLER
//1. Generador de número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }
 