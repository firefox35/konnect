let main = document.querySelector('.main');
let start = document.querySelector('.start');
let isSubmitted = true;


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

function storeInfo() {
    let name = document.getElementById("name").value;
    //Store Data Locally
    let fname = localStorage.setItem("name", name);
}

function getWord() {
    //Setting an Array of Words
    let array = [];
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();
}

//Setting an Array of Words
let array = ["brown", "truck", "train"];
//Choosing a Random word from the Array
let word = array[Math.floor(Math.random() * array.length)];;

function game() {
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();

    console.log(word);
    console.log(guess);
    //Split the Array in Seperate Letters
    let randWord = word.split('');
    guess.split('');
    console.log(randWord);

    let letterBox = document.getElementsByClassName('box');

    for (let i = 0; i < guess.length; i++) {

        letterBox[i].innerText = guess[i];

        let checkGuess = guess.split('');
        console.log(checkGuess);

        let box = document.querySelector('layout');

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

function clearInput() {
    document.getElementById('enterBox').value = null;
}

let count = 5;
let checkGuess = [];
let fname = localStorage.getItem("name", name);;
let randWord = [];
let guess = "";

function lifes() {
    document.getElementsByClassName('ansBtn');
    document.getElementById('cdn').innerHTML = count;
    count -= 1;


    if (randWord === checkGuess && count >= 0) {
        document.getElementsByClassName('ansBtn').disabled = 'disabled';
        endGame();
        return;
    } else {
        document.getElementsByClassName('ansBtn').disabled = false;
        //endGame();
        return;
    }
}

let gameOver;

function endGame(winner) {
    gameOver = true;
    if (winner == true) {
        confirm(fname + " you have won");
    } else {
        return;
        //confirm("Nice Try.Go Again!!");
    }
}
endGame();

function resetGame() {
    resetBtn = document.getElementById('resetBtn');
    resetBtn.game();
}

