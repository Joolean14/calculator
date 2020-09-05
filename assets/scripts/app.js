const defaultResult = 0;
let currentResult = defaultResult;


function readNumber(event){
    if (currentCalculationOutput.innerText === "0") {
      currentCalculationOutput.innerText = event.target.innerText;
    } else {
      currentCalculationOutput.innerText = currentCalculationOutput.innerText + event.target.innerText;
    }
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

// Basic operations
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

function clearCalc() {
    currentCalculationOutput.innerText = "0";
}

function calculate() {
    currentResultOutput.textContent = eval(currentCalculationOutput.innerText);
}


 //Event listeners
for (let i = 0; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener('click', readNumber);
}

sumBtn.addEventListener('click', readNumber);
subtractBtn.addEventListener('click', readNumber);
multiplyBtn.addEventListener('click', readNumber);
divideBtn.addEventListener('click', readNumber);
equalsBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearCalc);
    
    
    
