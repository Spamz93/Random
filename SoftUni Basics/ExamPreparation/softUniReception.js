function softUniReception(input) {
    let studentsCount = input[input.length - 1]
    let timeNeeded = 0;
    let emp1Eff = Number(input.shift())
    let emp2Eff = Number(input.shift())
    let emp3Eff = Number(input.shift())
    let answerPerHour = emp1Eff + emp2Eff + emp3Eff

    while (studentsCount > 0) {
        studentsCount -= answerPerHour
        timeNeeded++

        if (timeNeeded % 4 === 0) {
            timeNeeded++
        }
    }
    console.log(`Time needed: ${timeNeeded}h.`);

}
softUniReception(['1','2','3','45'])