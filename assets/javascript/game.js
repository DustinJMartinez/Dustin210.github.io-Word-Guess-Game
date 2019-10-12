//variables
var nameOptions = ["dustin", "beth", "jon","brynn","alyssa","henry"];


var selectedName = "";
var lettersInName =[];
var nameLines =0;
var linesAndCorrect = [];
var wrongNames = [];
var wrongLetters = [];

// counts
var winCount = 0;
var lossCount= 0;
var guessesLeft= 9;

function startGame () {
    selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    lettersInName = selectedName.split("");
    nameLines = lettersInName.length;

    //game reset
    guessesLeft = 9;
    wrongNames = [];
    linesAndCorrect = [];

    // loop, list the blanks and correct guesses, link to HTML
    for (var i=0; i<nameLines; i++){
        linesAndCorrect.push();
    }
    
    document.getElementById("nameToGuess").innerHTML = linesAndCorrect;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;


    console.log(selectedName);
    console.log(lettersInName);
    console.log(nameLines);
    console.log(linesAndCorrect);

}

function checkLetters(letter) {
   
    var isLetterInName = false;
    for (var i=0; i<nameLines; i++){
        if(selectedName[i] == letter) {
            isLetterInName = true;
           
        }
    }

    if(isLetterInName) {
        for (var i=0; i<nameLines; i++) {
            if(selectedName[i] == letter) {
                 linesAndCorrect.push(letter);
                // animals.push('cows');
                console.log(letter);
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(linesAndCorrect);


}

function roundComplete() {
    console.log("The Win count:" + winCount + "| Loser count:" + lossCount +"| Guesses left:" + guessesLeft);

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("nameToGuess").innerHTML = linesAndCorrect.toString();
    document.getElementById("wrongGuesses").innerHTML = wrongLetters

 console.log("lettersInName.toString()",lettersInName.toString())
  console.log("linesAndCorrect.toString()",linesAndCorrect.toString())

    if (lettersInName.toString() == linesAndCorrect.toString()) {
        console.log("blah")
        winCount++;
        alert("You Won!");
    
        document.getElementById("winCount").innerHTML = winCount;
    
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("LOSER!");

        document.getElementById("lossCount").innerHTML = lossCount;

        startGame();
    }
   
}



//start code
startGame();


//keys

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
   
    console.log(letterGuessed);
}