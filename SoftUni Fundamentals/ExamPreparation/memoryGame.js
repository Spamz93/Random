function memoryGame(input) {
    let sequenceOfElements = input[0].split(" ");
    let countMoves = 0;
  
    for (let i = 1; i < input.length; i++) {
      let command = input[i];
  
      if (command === "end") {
        console.log(`Sorry you lose :(\n${sequenceOfElements.join(" ")}`);
        return;
      }
  
      countMoves++;
      let index1 = Number(command.split(" ")[0]);
      let index2 = Number(command.split(" ")[1]);
  
      if (
        index1 === index2 ||
        index1 < 0 ||
        index2 < 0 ||
        index1 >= sequenceOfElements.length ||
        index2 >= sequenceOfElements.length
      ) {
        sequenceOfElements.splice(
          Math.floor(sequenceOfElements.length / 2),
          0,
          `-${countMoves}a`,
          `-${countMoves}a`
        );
        console.log("Invalid input! Adding additional elements to the board");
      } else if (sequenceOfElements[index1] === sequenceOfElements[index2]) {
        let element = sequenceOfElements[index1];
        if (index2 > index1){
            sequenceOfElements.splice(index1, 1);
            sequenceOfElements.splice(index2 - 1, 1);
        } else {
            sequenceOfElements.splice(index2, 1);
            sequenceOfElements.splice(index1 - 1, 1)
        }
        console.log(`Congrats! You have found matching elements - ${element}!`);
      } else {
        console.log("Try again!");
      }
  
      if (sequenceOfElements.length === 0) {
        console.log(`You have won in ${countMoves} turns!`);
        return;
      }
    }
  }
  memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])

