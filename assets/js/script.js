let main = document.querySelector('.main');
let start = document.querySelector('.start');
let isSubmitted = true;
let lives = 5;
let fname = localStorage.getItem("name", name);

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
    //let fname;
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();

    //console.log(word);
    //console.log(guess);
    //Split the Array in Seperate Letters
    let randWord = word.split('');
    guess.split('');
    //console.log(randWord);

    let letterBox = document.getElementsByClassName('box');

    if (guess != word) {
        decreaseLives();
    } else if (guess == word) {
        //console.log("winner");
        //winner();
        let answer = fname + ": You have won";
        document.getElementById('result').innerHTML = answer;
        document.getElementById('ansBtn').disabled = true;
    }

    for (let i = 0; i < guess.length; i++) {

        letterBox[i].innerText = guess[i];

        let checkGuess = guess.split('');
        console.log(checkGuess);

        //let box = document.querySelector('layout');

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


let checkGuess = [];

let randWord = [];
let guess = "";

function decreaseLives() {
    lives -= 1;
    document.getElementById('cdn').innerHTML = lives;

    if (lives == 0) {
        document.getElementById('ansBtn').disabled = true;
    } else {
        document.getElementById('ansBtn').disabled = false;
        return;
    }
}

function stringOnly(evt) {
    let ch = String.fromCharCode(evt.which);

    if (!(/[a-zA-Z]/.test(ch))) {
        evt.preventDefault();
    }
}




