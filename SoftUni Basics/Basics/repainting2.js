function repainting2 (input){
    let nailon = 1.5 * (Number(input[0]) + 2 )
    let paint = 14.5 * (Number(input[1])+ ((Number(input[1]) / 100 )) * 10 )
    let deterent = 5 * (Number(input[2]))
    let neededHours = Number(input[3]);
    let bags = 0.40

    console.log ([(nailon + paint + deterent + bags)  * 0.3] * neededHours + (nailon + paint + deterent + bags))




}
repainting2(["10","11","4","8"])