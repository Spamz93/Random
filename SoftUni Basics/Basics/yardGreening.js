function yardGreening (input){
    let a = Number(input[0]);
    let result =  a * 7.61;
    let result2 = result * 0.18;
    let result3 = result - result2
    
//· "The final price is: {крайна цена на услугата} l
// "The discount is: {отстъпка} lv
    console.log(`The final price is: ${result3} lv.`)
    console.log (`The discount is: ${result2} lv.`)
    
}

yardGreening (["550"])