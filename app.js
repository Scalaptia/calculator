class Calculator {
    constructor(lastScreen, currentScreen) {
        this.lastScreen = lastScreen
        this.currentScreen = currentScreen
        this.clearScreen()
    }
    
}

const numberButtons = document.querySelectorAll('[number-btn]');
const operatorButtons = document.querySelectorAll('[operator-btn]');
const equalsButton = document.querySelector('[equals-btn]');
const clearButton = document.querySelector('[clear-btn]');
const deleteButton = document.querySelector('[delete-btn]');
const lastScreen = document.querySelector('[last-screen]');
const currentScreen = document.querySelector('[current-screen]');

const clearScreen = function() {
    currentScreen = ""
    lastScreen = ""
}

const deleteScreens = function() {

}

const appendNumber = function(number) {

}

const chooseOperation = function(operation) {

}

const calculate = function() {

}

const updateDisplay = function() {

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
