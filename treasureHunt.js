function treasureHunt(array) {
    let chest = array[0].split('|')

    for (let i = 1; i < array.length; i++) {
        let currentInput = array[i].split(' ')
        let command = currentInput[0];
        if (command === 'Loot') {
            let loot = currentInput.slice(1)

            for (let j = 0; j < loot.length; j++) {
                let item = loot[j]

                if (!chest.includes(item)) {
                    chest.unshift(item)
                    
                }
            }
        }
        if (command === 'Drop') {
            let dropIndex = currentInput[1]
            if(dropIndex < 0 || dropIndex > chest.length){
                continue;
            }
            let dropItem = chest.splice(dropIndex, 1)
            chest.push(dropItem[0])
            
        }
        if (command === "Steal") {
            let stealIndex = currentInput[1];
            console.log(chest.splice(-stealIndex).join(', '))
            // print the stolen Items
               
        }
        if (command === "Yohoho!") {
            break;
        }
    }
    // replaceAll(',', '')
    

    if (chest.length > 0) {
        let avgTreasureGain = (chest.join('').length / chest.length)
        console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(
    (["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
)