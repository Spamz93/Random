function suppliesforSchool(input){
     let pens = Number(input[0]);
     let markers = Number(input[1]);
     let detergent = Number(input[2]);
     let discount = Number (input[3]);
     let penPrice = pens * 5.80
     let markerPrice = markers * 7.20
     let detergentPrice = detergent * 1.20
      // works

     let total = penPrice + markerPrice + detergentPrice
     let finaltotal = total- (total * 0.25)
     console.log (finaltotal)


}
suppliesforSchool(["2","3","4","25"])