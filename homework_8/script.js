'use strict'

const button = document.getElementById("submit");
const output = document.getElementById("output");

button.addEventListener("click", (event) => {
  let firstNumber = document.getElementById("first-number").value;
  const operation = document.getElementById("operation").value;
  let secondNumber = document.getElementById("second-number").value;
  let result;

  event.preventDefault();

  if (firstNumber == "" || String(firstNumber).trim() === "") {
    console.log("Первое число не указано");
    return (output.value = "Первое число не указано");
  }

  if (secondNumber == "" || String(secondNumber).trim() === "") {
    console.log("Второе число не указано");
    return (output.value = "Второе число не указано");
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Некорректный ввод чисел");
    return (output.value = "Некорректный ввод чисел");
  }

  switch (operation) {
    case "": {
      console.log("Не введён знак");
      return (output.value = "Не введён знак");
    }
    case "+": {
      result = Number(firstNumber) + Number(secondNumber);
      break;
    }
    case "-": {
      result = Number(firstNumber) - Number(secondNumber);
      break;
    }
    case "*": {
      result = Number(firstNumber) * Number(secondNumber);
      break;
    }
    case "/": {
      result = Number(firstNumber) / Number(secondNumber);
      break;
    }
    default: {
      console.log("Программа не поддерживает такую операцию");
      return (output.value = "Программа не поддерживает такую операцию");
    }
  }

  if (
    output !== "Программа не поддерживает такую операцию" &&
    (isNaN(result) || result === Infinity)
  ) {
    console.log("Операция некорректна");
    return (output.value = "Операция некорректна");
  } else {
    console.log(result);
    return (output.value = `Результат: ${result}`);
  }
});