function histogram(input) {
   let totalNum = Number(input[0]);
   let countP1 = 0;
   let countP2 = 0;
   let countP3 = 0;
   let countP4 = 0;
   let countP5 = 0;

   for(let i = 1; i <= totalNum; i++ ){
      let num = Number(input[i]);
      if (num < 200){
         countP1++;
      } else if(num >= 200 && num <= 399){
         countP2++;
      } else if(num >= 400 && num <= 599){
         countP3++;
      } else if(num >= 600 && num <= 799){
         countP4++;
      } else{
         countP5++;
      }       
   }
   console.log(((countP1 / totalNum) * 100).toFixed(2) + `%`)
   console.log(((countP2 / totalNum) * 100).toFixed(2) + `%`)
   console.log(((countP3 / totalNum) * 100).toFixed(2) + `%`)
   console.log(((countP4 / totalNum) * 100).toFixed(2) + `%`)
   console.log(((countP5 / totalNum) * 100).toFixed(2) + `%`)


       

   
}




histogram (["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

