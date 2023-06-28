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




function timer() {

}



//function enterGuess() {
//    let txt = document.getElementById('enterBox');
//    let btn1 = document.getElementsByClassName('ansBtn');
//    let out1 = document.getElementById('box');
//    out1.innerHTML = txt.value;

//}


//let myFunction = {enterGuess};

function game() {
    //Setting an Array of Words
    let array = ["brown", "truck", "train"];
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();

    //Choosing a Random word from the Array
    let word = array[Math.floor(Math.random() * array.length)];

    console.log(word);
    console.log(guess);
    //Split the Array in Seperate Letters
    let randWord = word.split('');
    guess.split('');
    //let result = guess.localeCompare(word);
    
    console.log(randWord);
    //console.log(checkGuess);
    //console.log(result);
    guess.length;

    let letterBox = document.getElementsByClassName('box');
    let green = document.getElementsByClassName('clr1');
    let orange = document.getElementsByClassName('clr2');
    let red = document.getElementsByClassName('clr3');

    for (let i = 0; i < guess.length; i++) {
        letterBox[i].innerText = guess[i];

        //let letters = word.split('');
        let checkGuess = guess.split('');
        console.log(checkGuess);
        //console.log(letters);

        //let result = letters[i].localeCompare(checkGuess[i]);
        if (word.match(checkGuess[i])) {
            //checkGuess[i].style.color = 'green';
            checkGuess[i] = letterBox.background = "green";
            //return checkGuess;
            console.log(checkGuess[i]);

        } else if (word.includes(checkGuess[i])) {
            //checkGuess[i].style.color = "orange";
            checkGuess[i] = letterBox.background = "orange";
            //return checkGuess;
            console.log(checkGuess[i]);

        } else {
            //checkGuess[i].style.color = "red";
            checkGuess[i] = letterBox.background = "red";
            //return checkGuess;
            console.log(checkGuess[i]);
        }
    }
}

function getResult() {
    let box = document.getElementsByClassName('box');
    box.innerHTML = guess[i].value;
    let result = game(box);

    console.log(result);
}

function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}

