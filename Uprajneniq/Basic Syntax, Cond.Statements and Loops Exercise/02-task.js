function roundToPrecision(number, precision) {
  if (precision > 15) {
    precision = 15
  }
  let n = number.toFixed(precision)
  console.log(parseFloat(n));
  }
  roundToPrecision (10.5,3)