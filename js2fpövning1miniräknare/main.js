import {
  calculateAdd,
  calculateMult,
  calculateSub,
  calculateDiv,
} from "./modules/calc.js";

let buttons = document.querySelectorAll("button");
let header = document.getElementById("header");

buttons[0].addEventListener("click", () => {
  let result = calculateAdd()();
  header.innerText = `${result}`;
});

buttons[1].addEventListener("click", () => {
  let result = calculateSub()();
  header.innerText = `${result}`;
});

buttons[2].addEventListener("click", () => {
  let result = calculateMult()();
  header.innerText = `${result}`;
});

buttons[3].addEventListener("click", () => {
  let result = calculateDiv()();
  header.innerText = `${result}`;
});

/*
Inget konstigt här - det enda som sticker ut är rad 7, 12, 17 som gör samma saker fast med olika funktioner (addera, subtrahera, multiplicera). Det märkliga här är att man har 2x paranteser.

på rad 7, en styck parantes för att kalla på funktionen calculateAdd , och en till parentes direkt efter för att kalla på operation funktionen.

*/
