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

}

function game() {

}

function inputGuess() {

}

function checkGuess() {

}

function returnResult() {

}

function displayLeaderboard() {

}

function endGame() {

}




