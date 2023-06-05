function vegetableMarket(input){
  let vegprice = Number(input[0]) * Number(input[2]);
  let fruitprice = Number(input[1]) * Number(input[3]);
  let totalprice = (vegprice + fruitprice) / 1.94
  console.log(totalprice.toFixed(2))


}

vegetableMarket (["0.194", "19.4","10", "10"])