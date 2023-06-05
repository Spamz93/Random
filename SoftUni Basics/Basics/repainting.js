function repainting(input){
    let nailon = Number(input[0]) 
    let paint = Number(input[1])
    let thinner = Number (input[2]);
    let bags = 0.4;
    let neededHours = Number (input[3]);
    let nailontotal=  nailon + 2
    let painttotal =  paint + 1.1
    let nailonsum = nailontotal * 1.5
    let paintsum = painttotal * 14.50
    let thinnersum = thinner * 5
    let totalsum = nailonsum + paintsum + thinnersum + bags

    let total = (totalsum * 0.3) * neededHours
   
    console.log (total+totalsum)

}

repainting (["10","11","4","8"])