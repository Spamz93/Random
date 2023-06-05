function Shopping(input){
   let budget = Number(input[0]);
   let gpuCount = Number(input[1]);
   let cpuCount = Number(input[2]);
   let ramCount = Number(input[3]);
   let gpuPrice = gpuCount * 250;
   let cpuMoney = 0.35 * gpuPrice
   let cpuPrice = cpuCount * cpuMoney
   let ramMoney = 0.1 * gpuPrice
   let ramPrice = ramCount * ramMoney
   let totalPrice = ramPrice + cpuPrice + gpuPrice
   if(gpuCount > cpuCount){
     totalPrice *= 0.85
   }
   if (totalPrice <= budget){
    let budgetLeft = budget - totalPrice
    console.log (`You have ${budgetLeft.toFixed(2)} leva left!`)
   } else if (totalPrice > budget){
    let moneyNeeded = totalPrice - budget
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
   }



}

Shopping (["920.45",
"3",
"1",
"1"])