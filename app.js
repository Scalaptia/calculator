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

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}


appendNumber(number) {
    // Allows only 1 period
    if (number === "." && this.currentOperand.includes(".")) return
    if (this.currentOperand.length > 15) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
    // Skip if no numbers are present
    if(this.currentOperand === "") return
    // Do the operation then send to lastScreen
    if(this.lastOperand !== ""){
        this.calculate()
    }
    this.operation = operation
    this.lastOperand = this.currentOperand
    this.currentOperand = ""
}

calculate() {
    let computation
    const current = parseFloat(this.currentOperand)
    const previous = parseFloat(this.lastOperand)
    if (isNaN(previous) || isNaN(current)) return
    switch (this.operation) {
        case "+":
            computation = previous + current
            break
        case "-":
            computation = previous - current
            break
        case "X":
            computation = previous * current
            break
        case "%":
            computation = previous / current
            break
        default:
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.lastOperand = ""
}

updateDisplay() {
    this.currentScreen.innerText = this.currentOperand
    if(this.operation != null){
        this.lastScreen.innerText =
        `${this.lastOperand} ${this.operation}`
    } else {
        this.lastScreen.innerText = ""
    }
}
}

const calculator = new Calculator(lastScreen, currentScreen)


// Listener that sets number pressed as currentOperand
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  // Listener that sets number pressed as operation and sends currentOperand
  // to lastScreen
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clearScreen()
    calculator.updateDisplay()
})