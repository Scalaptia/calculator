let displayValue = ""

const numberButtons = document.querySelectorAll('[number-btn]')
const operatorButtons = document.querySelectorAll('[operator-btn]')
const equalsButton = document.getElementById('equals-btn')
const pointButton = document.getElementById('point-btn')
const clearButton = document.getElementById('clear-btn')
const deleteButton = document.getElementById('delete-btn')
const lastScreen = document.getElementById('lastScreen')
const currentScreen = document.getElementById('currentScreen')
  
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