function fishland(input){
   let skumriaPrice = Number(input[0]);
   let cacaPrice = Number (input[1]);
   let palamudKg = Number (input[2]);
   let safridKg = Number(input[3]);
   let midi = 7.50;
   let midiKg = Number(input[4]);

   let palamudPrice = skumriaPrice + skumriaPrice * 0.6
   let palamudTotal = palamudKg * palamudPrice
   let safridPrice = cacaPrice + cacaPrice * 0.8
   let safridTotal = safridKg * safridPrice
   let midiTotal = midiKg * midi
   let  total = palamudTotal + safridTotal + midiTotal
   console.log(total.toFixed(2))
    
}

fishland ([6.90,4.20,1.5,2.5,1])