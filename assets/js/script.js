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



function enterGuess() {
    let txt = document.getElementById('enterBox');
    let btn1 = document.getElementsByClassName('ansBtn');
    let out1 = document.getElementById('output-data');
    out1.innerHTML = txt.value;

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
    let letters = word.split('');
    let checkGuess = guess.split('');
    //let result = guess.localeCompare(word);
    //let colorG = document.querySelector("#clr1");
    //let colorO = document.querySelector(".clr2");
    //let colorR = document.querySelector(".clr3");
    console.log(letters);
    console.log(checkGuess);
    //console.log(result);

    for (let i = 0; i < checkGuess.length; i++) {
        let letters = word.split('');
        let checkGuess = guess.split('');
        let guessResult = checkGuess[i];
        let randWord = letters[i];

        //let result = letters[i].localeCompare(checkGuess[i]);
        if (randWord.match(guessResult)) {
            ///guessResult.colorG = "green";
            document.getElementById('box1').value = guessResult[0];
            document.getElementById('box2').value = guessResult[1];
            document.getElementById('box3').value = guessResult[2];
            document.getElementById('box4').value = guessResult[3];
            document.getElementById('box5').value = guessResult[4];
            return guessResult[i];
            //console.log(guessResult);
        } else if (randWord.includes(guessResult)) {
            //guessResult.colorO;
            document.getElementById('box1').value = guessResult[0];
            document.getElementById('box2').value = guessResult[1];
            document.getElementById('box3').value = guessResult[2];
            document.getElementById('box4').value = guessResult[3];
            document.getElementById('box5').value = guessResult[4];
            return guessResult;
            //console.log(guessResult);
        } else {
            document.getElementById('box3').value = guessResult[0];
            document.getElementById('box2').value = guessResult[1];
            document.getElementById('box3').value = guessResult[2];
            document.getElementById('box4').value = guessResult[3];
            document.getElementById('box5').value = guessResult[4];
            return guessResult;
            console.log(guessResult);
        }
    }

    //let box1 = document.getElementById('box1');
    //box1.innerHTML = guessResult[0].value;
    //let box2 = document.getElementById('box2');
    //box2.innerHTML = guessResult[1];
    //let box3 = document.getElementById('box3');
    //box3.innerHTML = guessResult[2];
    //let box4 = document.getElementById('box4');
    //box4.innerHTML = guessResult[3];
    //let box5 = document.getElementById('box5');
    //box5.innerHTML = guessResult[4];

}
game();



let guessResult;




function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}

