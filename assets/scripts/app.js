const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
// function getUserNumberInput() {
//     currentCalculationOutput.innerText = "+";
//   return parseInt(usrInput.value);
// }

function readNumber(event){
    console.log(event)
    currentCalculationOutput.innerText = currentCalculationOutput.innerText + event.target.innerText;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}


function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

function clearCalc () {
    currentCalculationOutput.innerText = "0";
}

function calculate () {
    return eval(currentCalculationOutput.innerText);
}

sumBtn.addEventListener('click', readNumber);
subtractBtn.addEventListener('click', readNumber);
multiplyBtn.addEventListener('click', readNumber);
divideBtn.addEventListener('click', readNumber);
clearBtn.addEventListener('click', clearCalc);
equalsBtn.addEventListener('click', calculate);


for (let i = 0; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener('click', readNumber);
}


    
    
    
