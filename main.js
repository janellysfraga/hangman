//GLOBAL VARIABLES (accesible by all functions)
//--------------------------------------------------------------

//Array of Word options (all lowercase)
const wordslist = ["belle", "aurora", "jasmine"];

//Solutions will be held here 
let choseWord = "";

//This will break the solution into individual letters to be stored in an array. 
var lettersInChosenWord = [];

//This will be the number of blanks we show based on the solution
var numBlanks= 0;

//Holds a mix of blank and solved letters (ex: a_p_l_e)
var blanksAndSuccesses = [];

//Holds all of the wrong guesses
var wrongGuesses = [];

//Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;

//FUNCTIONS
//-----------------------------------------


//It's how we'll start and restart the game. It's not being run here. It's just being made for future use. 
function startGame(){

    //Start over the guesses at specified number
    numGuesses = 9;

    //Solution is chosen randomly from wordlist
    chosenWord = wordsList[Math.floor(Math.random() * wordslist.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    //We count the number of letters in the word
    mumBlanks = lettersInChosenWord.length;

    //We print the solution in the console (for testing)
    console.log(chosenWord);

    //CRITICAL LINE - here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    //CRITICAL LINE - here we reset the wrong guesses from the previous round
    wrongGuesses = [];

    //Fill up the blanksAndSuccesses list with appropriate number of blanks,
    //which is based on number of letters in solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //Print the intial blanks in console.
    console.log(blanksAndSuccesses);

    //Reprints the guessesleft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses; 

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("  ");

    //Cleard the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


