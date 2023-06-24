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
    name.localStorage.setItem("name", name);
}





function timer() {

}



function startGame() {
    //Setting an Array of Words
    let array = ["brown", "truck", "train"];
    let guess = inputGuess();
    //Choosing a Random word from the Array
    let word = array[Math.floor(Math.random() * array.length)];

    console.log(word);
    console.log(guess);
    //Split the Array in Seperate Letters
    let char = word.split('');
    let checkGuess = guess.split('');

    let result = char.toLocaleString() === checkGuess.toLocaleString();
    if (result) {
        console.log((char).style.color = "green");
    } else {
        console.log('Its wrong');
    }


    console.log(char);
    console.log(checkGuess);





}

startGame();

function game() {

}

function inputGuess() {
    let userGuess;
    userGuess = document.getElementById('enterBox').value = "";
    document.getElementsByName('guess').innerHTML = (userGuess);
    alert(userGuess);

}

function checkGuess() {

}

function returnResult() {

}

function displayLeaderboard() {

}

function endGame() {

}




