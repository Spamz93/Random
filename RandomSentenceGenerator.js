const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

});
//console.log('Hello, this is your first random-generated sentence:')
function RSG(){
   let names = ["Peter", "Michell", "Jane", "Steve"]
   let places = ["Sofia", "Plovdiv", "Burgas", "Varna"]
   let adverbs = ["slowly", "deligently", "warmly", "sadly", "rapidly"]
   let nouns  = ["stones", "cake", "apple", "laptop", "bikes"]
   let details = ["near the river", "at home", "in the park"]
   let verbs = ["eats", "holds", "sees", "plays with", "brings"]

   function getRandomWord(array){
    let word = array[Math.floor(Math.random() * array.length)]
    return word;
   }
   let randomName = getRandomWord(names);
   let randomPlace = getRandomWord(places);
   let randomVerb = getRandomWord(verbs);
   let randomNouns = getRandomWord(nouns);
   let randomAdverb = getRandomWord(adverbs);
   let randomDetails = getRandomWord(details);

   let who = `${randomName} from ${randomPlace}`
   let action = `${randomAdverb} ${randomVerb} ${randomNouns}`

   let sentence = `${who} ${action} ${randomDetails}`

   //console.log('Hello, this is your first random-generated sentence:')
   console.log(sentence);
   readline.question('Click [Enter] to generate a new one.', () => {
    RSG();
})
}
console.log('Hello, this is your first random-generated sentence:')
RSG();

