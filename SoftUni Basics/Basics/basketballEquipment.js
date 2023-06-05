function basketballEquiptment(input){
    let snickers = (Number(input[0]) - ((Number(input[0]) / 100 )) * 40 )
    let jersey = snickers - ((snickers / 100 ) * 20)
    let ball = jersey - ((jersey / 100 ) * 75 )
    let other = ball - ((ball/ 100) * 80)
    let result = snickers + jersey + ball + other

    console.log(Number(input[0]) + result)




}

basketballEquiptment (["365"])