function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let pointsCount = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let totalScore = 0;

    if (place === "Bulgaria"){
        totalScore = pointsCount * dancersCount;
        if (season === "summer"){
            totalScore = totalScore - (totalScore * 0.05)
        } else if (season === "winter"){
            totalScore = totalScore - (totalScore * 0.08)
        }
    }
    if (place === "Abroad"){
        totalScore = (pointsCount * dancersCount) + 0.5 * (pointsCount * dancersCount)
        if (season === "summer"){
            totalScore = totalScore - (totalScore * 0.1)
        } else if (season === "winter"){
            totalScore = totalScore - (totalScore * 0.15)
        }
    }
    let charitySum = totalScore * 0.75
    let moneyPerDancer = (totalScore - charitySum) / dancersCount
    console.log(`Charity - ${charitySum.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}
    
    

finalCompetition 
(["25",
"98",
"winter",
"Bulgaria"])