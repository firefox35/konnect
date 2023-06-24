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
    let char = word.split('');
    let checkGuess = guess.split('');

    let fword = char.slice(0, 5);
    let word2 = checkGuess.slice(0, 5);
    console.log(fword);
    console.log(word2);

    console.log(fword === word2);

    for (let i = 0; i < fword.length; i++) {
        if (fword[i] === word2[i]) {
            console.log(fword === word2);
            //let color = green;
            //return color.toString(green);
        } else if (fword[i] === !word2[i]) {
            let color2 = orange;
            return color2.toString(orange);
        } else {
            let color3 = red;
            return color3.toString(red);

        }

        console.log(char);
    }

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
 


function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}




