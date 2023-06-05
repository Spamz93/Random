function godzillaVsKong(input){
   let budget = Number(input[0]);
   let actorNumber = Number(input[1]);
   let clothPricePerActor = Number(input[2]);
   let decoration = budget * 0.1
   let totalClothPrice = clothPricePerActor * actorNumber
   let totalFilmPrice = decoration + totalClothPrice
   if (actorNumber > 150){
    let newClothPrice = totalClothPrice * 0.9
    totalFilmPrice = decoration + newClothPrice
   }
   if (totalFilmPrice > budget){
    console.log (`Not enough money!`)
    console.log (`Wingard needs ${(totalFilmPrice - budget).toFixed(2)} leva more.`)
   } else if (totalFilmPrice <= budget){
    console.log (`Action!`)
    console.log (`Wingard starts filming with ${(budget - totalFilmPrice).toFixed(2)} leva left.`)
   }
   
}

godzillaVsKong (["20000",
"120",
"55.5"])





