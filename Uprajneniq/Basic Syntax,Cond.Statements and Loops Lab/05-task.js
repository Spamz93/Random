function monthPrinter(num) {
    let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]
    if (num >= 1 && num <= 12 ) {
        console.log(months[num-1]);  
    } else{
        console.log(`Error!`);
    }
}
monthPrinter(1)