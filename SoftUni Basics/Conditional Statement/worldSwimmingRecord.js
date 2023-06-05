function worldSwimmingRecord (input){
  let swimmingRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeFor1m = Number(input[2])
  let totalTimeForTheDistance = distance * timeFor1m
  let time1 = Math.floor ( distance / 15 )
  let time = time1 * 12.5
  let totalTime = (totalTimeForTheDistance + time).toFixed(2)
  
  if(totalTime >= swimmingRecord){
    console.log (`No, he failed! He was ${(totalTime- swimmingRecord).toFixed(2)} seconds slower.`)
  } else if(totalTime < swimmingRecord){
    console.log (`Yes, he succeeded! The new world record is ${(swimmingRecord - ((swimmingRecord - totalTime))).toFixed(2)} seconds.`)

  }

}

worldSwimmingRecord (["55555.67","3017","5.03"])