function salary(input){
    let tabs = Number(input[0]);
    let startSalary = Number(input[1]);
    let browseType = "";
     
    for ( let i = 2 ; i <= tabs + 1 ; i++){
    browseType = (input[i]);
    if ( browseType === "Facebook"){
        startSalary -= 150
    } else if ( browseType === "Instagram"){
       startSalary -= 100
    } else if ( browseType === "Reddit"){
        startSalary -= 50
    } else {
        startSalary
    }
    }
    if ( startSalary <= 0){
        console.log(`You have lost your salary.`)
    } else {
        console.log(`${startSalary}`)
    }
    }
    
salary (["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])