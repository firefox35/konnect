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
let randWord = [];
function lifes() {
    document.getElementsByClassName('ansBtn');
    count -= 1;
    document.getElementById('cdn').innerHTML = count;

    // for (i = 0; i <= count.length; i--) {


    //   alert("You're a winner");
    //  } else {
    //   alert('You lose!!');
}

function showResult() {

    for (i = 0; i < game.length; i++) {

        if (game == true && count >= 0) {
            document.getElementsByClassName('ansBtn').disable = true;
            confirm("You're a winner!!");
        } else if (count = 0 && game == false) {
            document.getElementsByClassName('ansBtn').disable = true;
            confirm("Nice Try. Go Again!!");
        } else {
            document.getElementsByClassName('ansBtn').disable = false;
            confirm("Keep playing");
        }
    }
}

function endGame() {
    let option = name + " YOU'RE A WINNER\n START GAME AGAIN!\n CLICK OK!\n or\n EXIT GAME!\n CLICK EXIT";
    if (showResult == true) {
        document.getElementsByClassName('ansBtn').reset = false;
        document.getElementsByClassName('ansBtn').disable = false;
    } else {
        document.getElementsByClassName('ansBtn').disable = false;
    }
}

    //let result = [game];
  //  function getResult(endResult) {

        //let result = document.querySelector('box');

    //    if (endResult === true) {
            //document.getElementsByClassName('layout')[0].style.color = 'green';
   //     } else if (endResult === !false && true || false && !true) {
            //document.getElementsByClassName('layout')[0].style.color = 'orange';
    //    } else {
            //document.getElementsByClassName('layout')[0].style.color = 'red';
    //    }
        //document.getElementsByClassName('box');
        //box.innerHTML = guess[i].value;
        //let result = game(box);

        //console.log(result);
    //}