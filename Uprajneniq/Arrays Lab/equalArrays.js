function equalArrays(arr1, arr2) {
    let sum = 0;
    let isEqual = true
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == arr2[i]){
            sum+=Number(arr1[i]);
        } else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    if(isEqual){
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1'], ['10'])