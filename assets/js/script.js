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
    //guess.length;

    let letterBox = document.getElementsByClassName('box');
    

    for (let i = 0; i < guess.length; i++) {
        letterBox[i].innerText = guess[i];

        //let letters = word.split('');
        let checkGuess = guess.split('');
        console.log(checkGuess);
        //let color ="";
        //console.log(letters);
        let box = document.querySelector('layout');
        //let result = letters[i].localeCompare(checkGuess[i]);
        if (word.match(checkGuess[i])) {

            document.getElementsByClassName('box')[i].style.backgroundColor = 'green';
           
            //return checkGuess;
            console.log(checkGuess[i]);

        } else if (word.includes(checkGuess[i])) {

            document.getElementsByClassName('box')[i].style.backgroundColor = 'orange';
            
            //return checkGuess;
            console.log(checkGuess[i]);

        } else {

            document.getElementsByClassName('box')[i].style.backgroundColor = 'red';
            
            //return checkGuess;
            console.log(checkGuess[i]);
        }
    }
}

function clearInput() {
    document.getElementById('enterBox').value = null;
}

let result = [game];

function getResult(endResult) {

    //let result = document.querySelector('box');

    if (endResult === true) {
        //document.getElementsByClassName('layout')[0].style.color = 'green';
    } else if (endResult === !false && true || false && !true) {
        //document.getElementsByClassName('layout')[0].style.color = 'orange';
    } else {
        //document.getElementsByClassName('layout')[0].style.color = 'red';
    }
    //document.getElementsByClassName('box');
    //box.innerHTML = guess[i].value;
    //let result = game(box);

    //console.log(result);
}

getResult(result);

function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}

