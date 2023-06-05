function salary(input) {
    let countTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 0;
    let fine = 0;
    let curName = ""
    
 
    for (i = 2; i <= countTabs + 1 ; i++) {
        curName = (input[i]);
        index++;
        if (curName === "Facebook") {
            fine += 150;
        } else if (curName === "Instagram") {
            fine += 100;
        } else if (curName === "Reddit") {
            fine += 50;
        }
    }
 
 
        if (fine >= salary){
            console.log(`You have lost your salary.`);
        }else{
            let moneyLeft = salary - fine ;
            console.log(moneyLeft);
        
    }
}

salary (["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])