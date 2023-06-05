function theLift(input) {
    let peopleLine = Number(input.shift());
    let waggons = input.toString().split(' ');
    let filledWaggons = '';

    for (let i = 0; i < waggons.length; i++) {
        let currentWaggon = Number(waggons[i]);
        if (peopleLine > 4) {
            if (currentWaggon > 0) {
                let freeSpace = 4 - currentWaggon;
                peopleLine -= freeSpace;
                currentWaggon += freeSpace;
                filledWaggons += `${currentWaggon}` + ' ';
            } else {
                currentWaggon += 4;
                peopleLine -= currentWaggon;
                filledWaggons += `${currentWaggon}` + ' ';
            }


        } else {
            currentWaggon = peopleLine;
            filledWaggons += `${currentWaggon}`;
            peopleLine = 0;

        }
    }

    if (peopleLine === 0) {
        console.log(`The lift has empty spots!`);
        console.log(filledWaggons);
    } else if (peopleLine > 0) {
        console.log(`There isn\'t enough space! ${peopleLine} people in a queue!`);
        console.log(filledWaggons);
    } else if (waggons.length === filledWaggons.length && peopleLine === 0) {
        console.log(filledWaggons);
    }
}
theLift([
    "20",
    "0 2 0"
   ])