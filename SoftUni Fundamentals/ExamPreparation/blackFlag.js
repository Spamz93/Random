function blackFlag(array) {
    let newArray = array.map(Number)
    let plunderDays = newArray[0];
    let dailyPlunder = newArray[1];
    let expectedPlunder = newArray[2];
    let totalPlunder = 0;

    for (let day = 1; day <= plunderDays; day++) {
        totalPlunder += dailyPlunder

        if (day % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5
        }
        if (day % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3
        }
    }
    let percentage = (totalPlunder / expectedPlunder) * 100

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(
    (["10",
        "20",
        "380"])
)