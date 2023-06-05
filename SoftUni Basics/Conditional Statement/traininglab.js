function trainingLab(input){
 // zalata e 890 cm shiroka ( 100 ot tqh sa koridor) = 790 ostawat
 // 1 mqsto zaema 70(shirochina) i 120 ( duljina )
 // zalata e dulga 1500 cm 
 // gubim 3 mesta

    let roomLength = input[0] * 100 ;
    let roomWidth =  input[1] * 100 - 100;
    let desks = Math.floor (roomWidth / 70 )
    let rows = Math.floor (roomLength / 120);
    let total = (desks * rows) -3 
    console.log(total)


}

trainingLab([15,8.9])