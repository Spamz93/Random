function evenAndOdd(array) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let number of array){
        if (number % 2 === 0){
            sumEven+=number
        } else{
            sumOdd+=number
        }
    }
    console.log(sumEven-sumOdd);
    
}
evenAndOdd ([2,4,6,8,10])