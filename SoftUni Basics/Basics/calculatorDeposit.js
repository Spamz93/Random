function calculatorDeposit(input){
    let deposit = Number(input[0]);
    let deadline = Number (input[1]);
    let yearrate = Number (input[2]) / 100 ;
    let interest = deposit * yearrate;
    let monthlyinterest = interest / 12;
    let total = deposit + deadline * monthlyinterest;
    console.log (total)



}
calculatorDeposit(["200","3","5.7"])