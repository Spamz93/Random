function solve(input) {
    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {
            let buff = "";
            if(hours < 10){
                buff += "0" + hours;
            } else{
                buff += hours;
            }
            buff += ":";
            if (min < 10){
                buff += "0" + min;
            } else {
                buff += min;
            }
            
        }
        console.log(buff)
    }
    
}
solve()