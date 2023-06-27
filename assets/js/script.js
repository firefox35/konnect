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
    //let txt = document.getElementById('enterBox');
    //let btn1 = document.getElementsByClassName('ansBtn');
    //let out1 = document.getElementById('output-data');
    //out1.innerHTML = txt.value;

//}




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
    //let letters = word.split('');
    //let checkGuess = guess.split('');
    //let result = guess.localeCompare(word);
    //let colorG = document.querySelector("#clr1");
    //let colorO = document.querySelector(".clr2");
    //let colorR = document.querySelector(".clr3");
    //console.log(letters);
    ///console.log(checkGuess);
    //console.log(result);

    for (let i = 0; i < guess.length; i++) {
        //let letters = word.split('');
        //let checkGuess = guess.split('');
        let guessResult = guess[i];
        let randWord = word[i];
        

        //let result = letters[i].localeCompare(checkGuess[i]);
        if (randWord.match(guessResult)) {
            ///guessResult.colorG = "green";
            
            document.getElementById("out1").value = guessResult;
           // document.getElementsByClassName('out2').innerHTML = guessResult[1].value;
            //document.getElementsByClassName('out3').innerHTML = guessResult[2].value;
            //document.getElementsByClassName('out4').innerHTML = guessResult[3].value;
            //document.getElementsByClassName('out5').innerHTML = guessResult[4].value;
          
            return guessResult;
            console.log(guessResult);
        } else if (randWord.includes(guessResult)) {
            //guessResult.colorO;
     
            document.getElementById("out1").value = guessResult;
            //document.getElementsByClassName('out2').innerHTML = guessResult[1].value;
            //document.getElementsByClassName('out3').innerHTML = guessResult[2].value;
            //document.getElementsByClassName('out4').innerHTML = guessResult[3].value;
            //document.getElementsByClassName('out5').innerHTML = guessResult[4].value;
            return guessResult;
            console.log(guessResult);
            
        } else {
          
            document.getElementById("out1").value = guessResult;
            //document.getElementsByClassName('out2').innerHTML = guessResult[1].value;
            //document.getElementsByClassName('out3').innerHTML = guessResult[2].value;
            //document.getElementsByClassName('out4').innerHTML = guessResult[3].value;
            //document.getElementsByClassName('out5').innerHTML = guessResult[4].value;
           //document.getElementsByClassName('out5').value = guessResult.indexOf("", 4);
            return guessResult;
            console.log(guessResult);
        }

        
    }
}
    
game();



let guessResult;




function displayLeaderboard() {
    let name = document.getElementById("name").value;
}

function endGame() {

}

