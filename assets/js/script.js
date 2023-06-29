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


function game() {
    //Setting an Array of Words
    let array = ["brown", "truck", "train"];
    //Input guess from user
    let guess = document.getElementById('enterBox').value.toLowerCase();

    //Choosing a Random word from the Array
    let word = array[Math.floor(Math.random() * array.length)];

    //let static= new Math.seedrandom();
    //static = new Math.seedrandom(word, guess==true);
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
        
        if (word.match(checkGuess[i])) {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'green';
            console.log(checkGuess[i]);

        } else if (word.includes(checkGuess[i])) {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'orange';
            console.log(checkGuess[i]);

        } else {
            document.getElementsByClassName('box')[i].style.backgroundColor = 'red';
            console.log(checkGuess[i]);
        }
    }
}

function clearInput() {
    document.getElementById('enterBox').value = null;
}



function lifes() {
    document.getElementsByClassName('ansBtn');
    let count = 5;
    count -=1;
    document.getElementById('cdn').innerHTML = count;

   // for (i = 0; i <= count.length; i--) {

      //  if (guess === true) {
       //     alert("You're a winner!!");
      //  } else if (count === 0 && guess === true) {
         //   alert("You're a winner");
      //  } else {
         //   alert('You lose!!');
      //  }
    }












//let result = [game];

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


//getResult(result);





function displayLeaderboard() {
    let name = document.getElementById("name").value;
}



