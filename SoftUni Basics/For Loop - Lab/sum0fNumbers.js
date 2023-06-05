function sum0fNumbers(input) {
    let numAsText = input[0];
    let sum = 0;

    for(let i= 0; i < numAsText.length; i++){
        let currentNumber = Number(numAsText[i])
        sum += currentNumber    // sum = sum + currentNumber
        // sum++
    }
    console.log (`The sum of the digits is:${sum}`)
    
}

sum0fNumbers (["564891"])