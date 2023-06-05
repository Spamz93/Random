function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let earnedMoneyPerDay = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);
    let daysLeft = 5

    let savedPocketMoney = daysLeft * pocketMoneyPerDay
    let earnedMoney = daysLeft * earnedMoneyPerDay
    let totalSavedMoney = savedPocketMoney + earnedMoney
    let remainingMoney = totalSavedMoney - expenses
    
    if (remainingMoney >= giftPrice){
        console.log(`Profit: ${remainingMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice-remainingMoney).toFixed(2)} BGN.`);
    }

    
}
braceletStand (["2.10",
"17.50",
"20.20",
"148.50"])