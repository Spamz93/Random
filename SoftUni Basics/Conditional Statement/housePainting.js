function housePainting(input){
   let houseHeigth = Number(input[0]);
   let houseWight = Number(input[1]);
   let roofHeigth = Number(input[2]);
   
   let wall = houseHeigth * houseWight
   let window = 1.5 * 1.5
   let bothSideWalls = (2 * wall) - (2 * window)
   let backWall = houseHeigth * houseHeigth
   let entrance = 1.2 * 2
   let frontBackWall = 2 * backWall - entrance 
   let total = bothSideWalls + frontBackWall

   let greenPaint = total / 3.4
   console.log(greenPaint.toFixed(2))

 

}

housePainting ([6,10,5.2])