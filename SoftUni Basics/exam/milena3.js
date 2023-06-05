function catLife (input){
    let breed = (input[0]);
    let gender = (input[1]);
    let catYears = 0 ;
     
    switch (breed) {
                    case "British Shorthair":
                        if(gender == 'm')
                        {
                            catYears = 13;
                        }
                        else if(gender == 'f')
                        {
                            catYears = 14;
                        }
                        break;
                    case "Siamese":
                        if (gender == 'm')
                        {
                            catYears = 15;
                        }
                        else if (gender == 'f')
                        {
                            catYears = 16;
                        }
                        break;
                    case "Persian":
                        if (gender == 'm')
                        {
                            catYears = 14;
                        }
                        else if (gender == 'f')
                        {
                            catYears = 15;
                        }
                        break;
                    case "Ragdoll":
                        if (gender == 'm')
                        {
                            catYears = 16;
                        }
                        else if (gender == 'f')
                        {
                            catYears = 17;
                        }
                        break;
                    case "American Shorthair":
                        if (gender == 'm')
                        {
                            catYears = 12;
                        }
                        else if (gender == 'f')
                        {
                            catYears = 13;
                        }
                        break;
                    case "Siberian":
                        if (gender == 'm')
                        {
                            catYears = 11;
                        }
                        else if (gender == 'f')
                        {
                            catYears = 12;  
                        }
                        break;
                        default:
                            return console.log(`${breed} is an invalid cat breed`);
                        
                    
                        
                }
     
                 let catMonths = (catYears * 12) / 6;
                console.log(`${catMonths} cat months`);
     
     
    }
    catLife (["Tom",
    "m"])