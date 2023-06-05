function toyShop(input){
 let puzzlePrice = 2.60
 let dollPrice = 3
 let teddyBearPrice = 4.10
 let minionPrice = 8.20
 let truckPrice = 2.0
 let vacationPrice = Number(input[0]);
 let puzzleCount = Number(input[1]);
 let dollCount = Number(input[2]);
 let teddyBearCount = Number(input[3]);
 let minionCount = Number(input[4]);
 let truckCount = Number(input[5])
 let puzzleTotal = puzzleCount * puzzlePrice
 let dollTotal = dollCount * dollPrice
 let teddyBearTotal = teddyBearCount * teddyBearPrice
 let minionTotal = minionCount * minionPrice
 let truckTotal = truckCount * truckPrice
 let totalSum = puzzleTotal + teddyBearTotal + minionTotal + truckTotal + dollTotal

 let toysTotal = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount

 if (toysTotal >= 50){
    totalSum = totalSum - (totalSum * 0.25)
 }
 let rent = totalSum * 0.1

 let winnings = totalSum - rent
 if(winnings >= vacationPrice){
    console.log (`Yes! ${(winnings - vacationPrice).toFixed(2)} lv left.`)
 }
   else if (winnings < vacationPrice)
   console.log(`Not enough money! ${(vacationPrice - winnings).toFixed(2)} lv needed.`);
}

toyShop (["40.8",
"20",
"25",
"30",
"50",
"10"])