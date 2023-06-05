function oscars(input) {
    let actorsName = input[0];
    let academyPoints= Number(input[1])
    let judges = Number(input[2]);
    let totalResult = 0;

    for(let i = 3; i <= input.length - 2; i += 2){
       // console.log(input[i])
       //console.log(input[i + 1]);
        let points = input[i + 1];
        let name = input[i].length
        academyPoints += ((name * points) / 2)
        if(academyPoints > 1250.5){
            break;
        }
    }
    if (academyPoints > 1250.5){
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
    } else{
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])