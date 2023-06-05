function maxNumber(list) {
    let topInteger = [];

    for (let i = 0; i < list.length ; i++){
        let currentNum = list[i];
        let isTop = true;
        for (let j = i + 1; j < list.length; j++){
        let rightNumber = list[j]

        if (rightNumber >= currentNum){
        isTop = false;
        break;
        }
    } if (isTop){
    topInteger.push(currentNum)
   }
 }
    console.log(topInteger.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])