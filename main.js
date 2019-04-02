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

// It's where we would do all the comparisons for matches
function checkLetters(letter) {

    // This boolean will be toogled based on whether or not a user letter is found
    var letterInWord = false;

    //Checks if a letter exists in an array at all
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {
            // If letter exists then toggle the bollen to true. This will be used in the next step
            letterInWord = true;
        }
    }

    //If the letter exists somewhere in the word, then figure out exactly where (which index)
    if (letterInWord) {

        // loop through the word
        for(var j = 0; j < numBlanks; j++) {

            // Populate the blankAndSuccesses with every instance of the letter
            if (chosenWord[j] === letter) {

                //Here we set the specific space in blanks and letters equal to the letter when it matches
                blanksAndSuccesses[j] = letter;

            }

        }

        //logging for testing
        console.log(blanksAndSuccesses);
    }

    //if the letter does not exist at all...
    else {

        //...then we add the letter to the ;ist of wrong letters, and we subtract one of the guesses
        wrongGuesses.push(letter);
        numGuesses--;

    }
}

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First log an initial status update in the console telling us how many wins, losses, and guesses left
    console.log(`winCount: ${WinCounter} | LossCount: ${lossCounter} | numGuesses: ${numGuesses}`);

    // Update the HTML to reflect the new number if guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // This will print the array of guesses and blanks onto the page
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("  ");

    // This will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // If we have gotten all letters to match the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

        //...add to the win counter and give the user an alert
        winCounter++;
        alert("You win!");

        //Update the win counter in the HTML and restart the game
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame(); 

    }

    // If we've run out of guesses...
    else if (numGuesses === 0) {

        // Add to the loss number
        lossCounter++;

        // Give user an alert
        alert("You lose");

        //Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;

        //Restart the game
        startGame();

    }
}