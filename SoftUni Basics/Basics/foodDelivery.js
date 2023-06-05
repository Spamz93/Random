function foodDelivery(input){
    let chickencount  = Number(input[0]);
    let fishcount = Number(input[1]);
    let vegcount = Number(input[2])
    let chickenprice = 10.35
    let fishprice = 12.40
    let vegprice = 8.15
    let chickenorder = chickencount * chickenprice
    let fishorder = fishcount * fishprice
    let vegorder =  vegcount * vegprice
    let totalorder = chickenorder + fishorder + vegorder
    let dessert = totalorder * 0.2
    let delivery = 2.5
    let totalsum = totalorder + dessert + delivery
    console.log(totalsum)


}

foodDelivery (["2", "4","3"])