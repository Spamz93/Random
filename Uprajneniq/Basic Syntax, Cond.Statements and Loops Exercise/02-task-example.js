function roundToPrecision(number, precision) {
    precision = Math.min (precision, 15);
    const roundedNumber = +number.toFixed(precision)
    const formattedNumber = parseFloat(roundedNumber)
    console.log(formattedNumber);
    }
    roundToPrecision (3.1415926535897932384626433832795,2)