const numberButtons = document.querySelectorAll('[number-btn]');
const operationButtons = document.querySelectorAll('[operator-btn]');
const equalsButton = document.querySelector('[equals-btn]');
const clearButton = document.querySelector('[clear-btn]');
const deleteButton = document.querySelector('[delete-btn]');
const lastScreen = document.querySelector('[last-screen]');
const currentScreen = document.querySelector('[current-screen]');

class Calculator {
    constructor(lastScreen, currentScreen) {
        this.lastScreen = lastScreen
        this.currentScreen = currentScreen
        this.clearScreen()
    }

clearScreen() {
    this.currentOperand = ""
    this.lastOperand = ""
    this.operation = undefined
}

deleteScreens() {

}

appendNumber(number) {
    // Allows only 1 period
    if (number === "." && this.currentOperand.includes(".")) return
    if (this.currentOperand.length > 15) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
    if(this.currentOperand === "") return
    this.operation = operation
    this.lastOperand = this.currentOperand
    this.currentOperand = ""
}

calculate() {

}

updateDisplay() {
    this.currentScreen.innerText = this.currentOperand
    this.lastScreen.innerText = this.lastOperand
}

}

  const add = function(a, b) {
      return a + b;
  };
  
  const subtract = function(a, b) {
      return a - b;
  };

  const multiply = function(a, b) {
      return a * b;
  };
  
  const divide = function(a, b) {
      return a / b;
  }

  function operate(func, a, b) {
      return func(a, b);
  }


const calculator = new Calculator(lastScreen, currentScreen)


// Listener that sets number pressed as currentOperand
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
