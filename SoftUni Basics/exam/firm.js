function firm(input) {
    let n = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;
    for (let i = 1; i <= n; i++) {
        let compData = String(input[i])
        let sales = Number(compData.slice(0, 2));
        let rating = Number(compData[2])
        totalRating += rating
        
        
        switch (rating) {
            case 2:
                totalSales += 0 
            break;
        
            case 3:
                totalSales += sales * 0.5
            break;

            case 4:
                totalSales += sales * 0.7
    
            break;

            case 5:
                totalSales += sales * 0.85
            break;

            case 6:
                totalSales += sales
            break;

        }
     
        
      }
      
      let averageRating = (totalRating / n).toFixed(2);
      let salesOutput = totalSales.toFixed(2);
      
      console.log(salesOutput);
      console.log(averageRating);


   
}


    
firm 

(["2",
"204",
"206"])