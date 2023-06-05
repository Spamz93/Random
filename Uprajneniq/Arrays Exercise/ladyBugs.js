function ladyBugs(array) {
    // command ladybug = 0 right 1
    // if next index e zaeto -> + 1 na indexa
    let fieldSize = array[0];
    let ladyBugsIndex = array[1].split(' ')
    let field = new Array(fieldSize);

    for (let i = 0; i < field.length; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < ladyBugsIndex.length; i++) {
        if (ladyBugsIndex[i] >= 0 && ladyBugsIndex[i] < ladyBugsIndex.length) {
            field[ladyBugsIndex[i]] = 1;
        }
    }
    for (let i = 2; i < array.length; i++) {
        let temp = array[i].split(' ')
        let startIndex = Number(temp[0]);
        let direction = temp[1];
        let flylength = Number(temp[2]);
        if (startIndex >= 0 && startIndex < field.length) {
            field[startIndex] = 0
        }
        if (direction === `left`) {
            if (field[startIndex - flylength] === 1 && field[startIndex - flylength - 1] >= 0) {
                field[startIndex - flylength - 1] = 1
            } else if (startIndex - flylength >= 0) {
                field[startIndex - flylength] = 1
            }
        } else {
            if (field[startIndex + flylength] === 1 && field[startIndex + flylength + 1] <= fieldSize - 1) {
                field[startIndex + flylength + 1] = 1
            } else if (startIndex + flylength < field.length) {
                field[startIndex + flylength] = 1
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs(
    [3, '0 1',
        '0 right 1',
        '2 right 1'])