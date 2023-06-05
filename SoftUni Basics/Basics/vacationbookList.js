function vacationbookList(input){
      let totalPages = Number(input[0]);
      let pagesperDay = Number(input[1]);
      let days = Number(input[2]);
      let total = totalPages / pagesperDay
      let neededHours = total / days
      console.log (neededHours)
    


}

vacationbookList (["212","20","2"])