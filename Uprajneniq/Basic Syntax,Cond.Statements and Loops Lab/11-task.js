function sumOfOddNumbers(n) {
    let sum = 0;
    let count = 0;
    let num = 1;
    while (count < n) {
        if (num % 2 !== 0){
        console.log(num);
        sum += num;
        count++;
        } 
        num ++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)


 /* for (let num = 1; count < n; num++) {
    if (num % 2 !== 0){
        console.log(num);
        sum += num;
        count++;
        } 
        
    
 } */