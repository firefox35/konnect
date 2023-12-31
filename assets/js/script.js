let main = document.querySelector('.main');
let start = document.querySelector('.start');
let isSubmitted = true;
let lives = 5;
let fname = localStorage.getItem("username", name);

// Add Username Button
document.getElementById('enterButton').addEventListener("click", validateInput);
// Home Button
document.getElementById('homeBtn').addEventListener("click", location.reload);
// Play Again Button
document.getElementById('resetBtn').addEventListener("click", clearInput);
// Play Game Buttons
document.getElementById('ansBtn').addEventListener("click", game);
document.getElementById('ansBtn').addEventListener("click", clearInput);

// Split the index html page into two different pages - Introdution and Game Screens
function enterGame() {
    if (isSubmitted) {
        main.style.display = 'block';
        start.style.display = 'none';
        isSubmitted = false;
    } else {
        main.style.display = 'none';
        start.style.display = 'block';
        isSubmitted = true;
    }
}

// Validate Username
function validateInput() {
    let name = document.getElementById("username").value.trim();
    if (name.length < 3) {
          alert("Username must be more than 3 characters!");
    } else {
        enterGame();
        storeInfo();
    }
}

// Stores your name into local storage
function storeInfo() {
    let name = document.getElementById("username").value;
    //Store Data Locally
    let fname = localStorage.setItem("username", name);
}

//Setting an Array of Words
let array = ["brown", "truck", "train", "boats", "house", "lakes", "plane", "games", "field", "items",
    "movie", "stray", "fight", "hours", "light", "phone"];
//Choosing a Random word from the Array
let word = array[Math.floor(Math.random() * array.length)];

function game() {
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();
    //Split the Array in Seperate Letters
    let randWord = word.split('');
    guess.split('');
    //Declare letterbox from the box class
    let letterBox = document.getElementsByClassName('box');
    //Call lives and decrease them and displays result in the loop in the game
    if (guess != word) {
        decreaseLives();
    } else if (guess == word) {
        let answer = fname + ": You have won";
        document.getElementById('result').innerHTML = answer;
        document.getElementById('ansBtn').disabled = true;
    }
    // Compares both words in a for loop 
    for (let i = 0; i < guess.length; i++) {

        letterBox[i].innerText = guess[i];
        let checkGuess = guess.split('');

        if (randWord[i] == checkGuess[i]) {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'green';
            console.log(checkGuess);

        } else if (word.includes(checkGuess[i]) && randWord[i] != checkGuess[i]) {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'orange';
            console.log(checkGuess);

        } else {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'red';
            console.log(checkGuess);
        }

    }
}

// Clear the text from the input box went submitted
function clearInput() {
    document.getElementById('enterBox').value = null;
}

// Calls lives to decrease and and disable button if you win the game
function decreaseLives() {
    lives -= 1;
    document.getElementById('cdn').innerHTML = lives;

    if (lives == 0) {
        document.getElementById('ansBtn').disabled = true;
        document.getElementById('result').innerHTML = `Game over. The answer is ${word}`;
    } else {
        document.getElementById('ansBtn').disabled = false;
        return;
    }
}

// Prevents numbers being added in the input field and submitted
function stringOnly(evt) {
    let num = String.fromCharCode(evt.which);

    if (!(/[a-zA-Z]/.test(num))) {
        evt.preventDefault();
    }
}
