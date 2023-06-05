function carWash(array) {
    let value = 0;
    for(let command of array){
        if (command == 'soap'){
            value += 10
        } else if (command === 'water') {
            value *= 1.2
        } else if (command === 'vacuum cleaner'){
            value *= 1.25
        } else if (command === 'mud'){
            value *= 0.9
        }

    }
    console.log(value);
    
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
