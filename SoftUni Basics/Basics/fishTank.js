function fishTank(input){
let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let procent = 0.17
let totalvolume= length * width * height
let totalvolumeinL = totalvolume / 1000
let neededL = totalvolumeinL * (1 - procent)
console.log(neededL)
}

fishTank(["85","75","47","17"])