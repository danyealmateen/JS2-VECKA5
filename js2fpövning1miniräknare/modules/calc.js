function calculate(operation) {
  let num1 = Number(document.getElementById("inputNumberOne").value);
  let num2 = Number(document.getElementById("inputNumberTwo").value);
  console.log(operation);

  return function () {
    return operation(num1, num2);
  };
}

//Add
function calculateAdd() {
  return calculate((a, b) => a + b);
}

//Subtract
function calculateSub() {
  return calculate((a, b) => a - b);
}

//Multiply
function calculateMult() {
  return calculate((a, b) => a * b);
}

function calculateDiv() {
  return calculate((a, b) => a / b);
}

export { calculateAdd, calculateSub, calculateMult, calculateDiv };

/*

Från rad 1-9 har vi en funktion som heter calculate och den i sig har en parameter som heter operation. num1 och num2 är value från inputfälten som är number.

På rad 6 returnerar vi en funktion som i sin tur returnerar resultatet av parametern operation som NU också är en FUNKTION. Parametrarna i operation() är num1 och num2.

På rad 12 gör vi nu en funktion som returnerar funktionen calculate på rad 1 (calculate) som i sin tur returnerar funktionen operation och returnerar a,b som argument som i detta fallet är num1 och num 2. så a,b är num1, och num2. Och nu säger vi bara a+b - vilket kommer returneras när vi klickar på knappen i main.js 

*/
