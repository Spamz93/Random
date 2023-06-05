function projectCreation(input){
    //"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
     let name = input[0];
     let project = input[1];
     let result = project * 3;
    console.log (`The architect ${name} will need ${result} hours to complete ${project} project/s.`)
 
}

projectCreation(["George", "4"])