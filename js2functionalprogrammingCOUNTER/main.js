import { firstCounter } from "./modules/counter.js";

const firstBtns = document.querySelectorAll("#first button");

firstBtns[0].addEventListener("click", firstCounter.add);

firstBtns[1].addEventListener("click", firstCounter.remove);
console.log(firstCounter);
