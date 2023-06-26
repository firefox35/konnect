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
    let result = guess.localeCompare(word);
    let colorG = document.querySelector("#clr1");
    let colorO = document.querySelector(".clr2");
    let colorR = document.querySelector(".clr3");
    //console.log(letters);
    //console.log(checkGuess);
    ///console.log(result);

    for (let i = 0; i < checkGuess.length; i++) {
        let guessResult = checkGuess[i];
        let randWord = letters[i];
       
        //let result = letters[i].localeCompare(checkGuess[i]);
        if (randWord.match(guessResult)) {
            guessResult.colorG = "green";
            console.log(guessResult);
        } else if (randWord.includes(guessResult)){
            guessResult.colorO;
            console.log(guessResult);
        } else {
            console.log(guessResult.fontcolor = "Red");
        }
            //let result = letters[i].localeCompare(checkGuess[i]).push=('green');
           // console.log(result.toString(checkGuess[i]));
            //guessResult[0] === randWord[i]
            //let color = green;
            //} else if (letters[i].indexOf(checkGuess[i]) != -1) {
            //result.toString("").fontcolor("Orange");
            //console.log(result);
            //let color2 = orange;
            //return color2.toString(orange);
        //} else {
            //result.toString().fontcolor("Red");
           // result.push("Red")
            //console.log(result);
            //ansResult.push("Red");

            //let color3 = red;
            // return color3.toString(red);

        //}


    }

}

game();





function checkGuess() {

}



function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}




