function areaOfFigures (input){
   let figure = input[0];
   
   if (figure === "square" ){
   let side = Number(input[1]);
   console.log((side * side).toFixed(3));

   } else if (figure === "rectangle"){
    let side = Number(input[1]);
    let sideB = Number(input[2]);
    console.log ((side * sideB).toFixed(3))
   } else if (figure === "circle"){
    let radius = Number(input[1]);
    console.log ((radius * radius * Math.PI).toFixed(3))
   } else if (figure === "triangle"){
   let sideA  = Number(input[1]);
   let height = Number (input[2]);
   console.log ((sideA * height) / 2 .toFixed(3))
   }

   // duljinata po visochinata / 2


   

}
areaOfFigures (["triangle","4.5","20"])
