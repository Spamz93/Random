function arrayRot(list, rotation) {
    for (let i = 0; i < rotation; i++){
        let result = list.shift()
        let result2 = list.push(result)
        console.log(list.join(' '));
    }

    
}
arrayRot ([51, 47, 32, 61, 21], 2 )