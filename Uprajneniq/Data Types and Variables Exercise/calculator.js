function calculator(firstNum, operator, secondNum) {
   let result = eval(`${firstNum} ${operator} ${secondNum}`);
   console.log(result.toFixed(2));
}
calculator(5, '+', 10)