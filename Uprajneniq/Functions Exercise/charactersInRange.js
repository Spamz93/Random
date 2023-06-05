function characatersInRange(firstCharacter, secondCharacter){
    let min = firstCharacter.charCodeAt(0);
    let max = secondCharacter.charCodeAt(0);

    let firstCharacterAsNumber = firstCharacter.charCodeAt(0);
    let secondCharacterAsNumber = secondCharacter.charCodeAt(0);

    if (firstCharacterAsNumber > secondCharacterAsNumber) {
        min = secondCharacter.charCodeAt(0);
        max = firstCharacter.charCodeAt(0);
    }

    let result = ' ';

    for (let i = min + 1; i < max; i++){
        let character = String.fromCharCode(i);
        result += character + ' ';

    }
    return result;


}
let result = characatersInRange('d', 'a')
console.log(result);