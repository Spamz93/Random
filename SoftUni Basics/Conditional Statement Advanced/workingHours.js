function workingHours(input) {
  let workTime = Number(input[0]);
  let workDay = (input[1]);
  let hasError = false 
  switch (workTime) {
    case 1: 
       if (workTime >= 10 && workTime <= 18){
       }
       default : hasError != false
    case 2: 
    switch (workDay) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": 
            default : hasError = true
        break;
   } 
  }  if (!hasError) {
    console.log(`open`);
 }   else {
    console.log(`closed`);
}
       
    }

workingHours(["19",
"Friday"])