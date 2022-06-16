// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu
// Created on: June 2022
// This file contains the JS functions for calculator.html

/**
 * This function does the calculation.
 */
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}

/**
 * This function displays values.
 */
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit
    calculator.waitingForSecondOperand = false
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit
  }
}

/**
 * This function does the operation.
 */
function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot
  }
}

/**
 * This function does the operation.
 */
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue)

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator
    return
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue
  } else if (operator) {
    const currentValue = firstOperand || 0
    const result = calculate(currentValue, inputValue, operator)

    calculator.displayValue = String(result)
    calculator.firstOperand = result
  }

  calculator.waitingForSecondOperand = true
  calculator.operator = nextOperator
}

/**
 * Buttons.
 */
function calculate(firstOperand, secondOperand, operator) {
  if (operator == "+") {
    return firstOperand + secondOperand
  } else if (operator == "-") {
    return firstOperand - secondOperand
  } else if (operator == "*") {
    return firstOperand * secondOperand
  } else if (operator == "/") {
    return firstOperand / secondOperand
  }

  return secondOperand
}

/**
 * This function does the calculation.
 */
function resetCalculator() {
  calculator.displayValue = "0"
  calculator.firstOperand = null
  calculator.waitingForSecondOperand = false
  calculator.operator = null
}

/**
 * This function does the calculation.
 */
function updateDisplay() {
  const display = document.querySelector(".calculator-screen")
  display.value = calculator.displayValue
}

updateDisplay()

const keys = document.querySelector(".calculator-keys")
keys.addEventListener("click", (event) => {
  const { target } = event
  if (!target.matches("button")) {
    return
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value)
    updateDisplay()
    return
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value)
    updateDisplay()
    return
  }

  if (target.classList.contains("all-clear")) {
    resetCalculator()
    updateDisplay()
    return
  }

  inputDigit(target.value)
  updateDisplay()
})
