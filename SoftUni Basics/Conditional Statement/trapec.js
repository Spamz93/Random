function trapec (input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let height = Number (input[2]);
    let result = (a+b) * height / 2
    console.log (result.toFixed(2))


}

trapec (["8","13","7"])