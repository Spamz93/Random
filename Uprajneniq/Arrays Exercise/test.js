function rotation(arr,n) {
    for(let i = 0; i < n; i++){
        let sum = arr.shift()
        arr.push(sum)
    }
    console.log(arr.join(' '));
    
} rotation(
    [51, 47, 32, 61, 21], 
    2)