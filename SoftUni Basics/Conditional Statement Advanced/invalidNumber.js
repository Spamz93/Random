function invalidNumber(input) {
  let a = Number(input[0])
  let isValid = a >= 100 && a <= 200
  if (!isValid && a !== 0){ 
   console.log ("invalid")
  }


    
}
invalidNumber(["150"])