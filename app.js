const numberButtons = document.querySelectorAll('[number-btn]');
const operatorButtons = document.querySelectorAll('[operator-btn]');
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
    this.currentOperand = number
}

chooseOperation(operation) {

}

calculate() {

}

updateDisplay() {
    this.currentScreen.innerText = this.currentOperand
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
