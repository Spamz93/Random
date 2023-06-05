function arrayModifier(input) {
    let newArray = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++){
        let [command, index1, index2] = input[i].split(' ')
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap'){
            let first = newArray[index1];
            let second = newArray[index2];
            newArray[index1] = second
            newArray[index2] = first
        } else if (command === 'multiply'){
            let first = newArray[index1];
            let second = newArray[index2];
            newArray[index1] = first * second;
        } else if (command === 'decrease'){
            //newArray = newArray.map(el => el - 1)
            for (let i = 0; i < newArray.length; i++){
            newArray[i] -= 1;
            }  
        }
    }

    console.log(newArray.join(', ')); 
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])