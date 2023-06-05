function hairSalon(input) {
    let dailyGoal = Number(input[0]);
    let index = 1;
    let moneyCount = 0;

    while (moneyCount < dailyGoal) {
        let command = input[index];
        index++;
        let type = input[index];
        index++;

        if (command !== "closed") {
            if (command === "haircut") {
                if (type === "mens") {
                    moneyCount += 15;
                } else if (type === "ladies") {
                    moneyCount += 20;
                } else if (type === "kids") {
                    moneyCount += 10;
                }
            } else if (command === "color") {
                if (type === "touch up") {
                    moneyCount += 20;
                } else if (type === "full color") {
                    moneyCount += 30;
                }
            }
        } else {
            break;
        }
    }

    if (moneyCount >= dailyGoal) {
        console.log("You have reached your target for the day!");
    } else {
        let diff = dailyGoal - moneyCount;
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${moneyCount}lv.`);
}
hairSalon (["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])