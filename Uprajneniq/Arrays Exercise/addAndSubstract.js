function addAndSubstract(list) {
    let oldSum = 0;
    let newSum = 0;

    for(let i = 0; i < list.length; i++) {
        let currentNum = list[i];
        let newNum = 0;

        if (currentNum % 2 === 0){
            newNum = currentNum + i;
        } else {
            newNum = currentNum - i;
        }
        list[i] = newNum;
        oldSum += currentNum;
        newSum += newNum;

    }
    console.log(list);
    console.log(oldSum);
    console.log(newSum);
    
    
}
addAndSubstract([5, 15, 23, 56, 35])