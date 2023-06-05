function password(input) {
    let index = 0
    let name = input[index]
    index++
    let pass = input[index]
    index++
    

    while (true) {
        let temPassword = input[index]
        index++
        if (temPassword === pass){
            break;
        }
    }
    console.log(`Welcome ${name}!`);

}



password
(["Nakov",
"1234",
"Pass",
"1324",
"1234"])