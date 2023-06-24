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

game();





function checkGuess() {

}

function returnResult() {

}

function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}




