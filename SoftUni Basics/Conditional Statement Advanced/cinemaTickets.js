function cinemaTickets(input) {
  let day = input[0];
  if (day == `Monday` || day == `Tuesday` || day == `Friday`) {
       day = `12`
  } else if (day == `Wednesday` || day == `Thursday` ){
      day = `14`
  } else if (day = `Saturday` || day == `Sunday`){
       day = `16`
  }
   console.log(day)

  }
    
    

cinemaTickets (["Monday"])