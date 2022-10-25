var randomNumber;
let remainingChances;

function setDefaultLevel() {
    randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log("random "+randomNumber);
    //showLevel.innerText = `guess the number between 1  to 10`;
    remainingChances = 5;
}

let inputNumber = document.getElementById('input');
let winning = document.getElementById('winning');
let chancesLeft = document.getElementById('chancesLeft');

function guessNumber() {
    console.log(remainingChances);
    if(inputNumber.value == randomNumber) {
        winning.innerText = `you guess the correct number ${inputNumber.value}`;
        setDefaultLevel();
    }
    else if(inputNumber.value > randomNumber) {
        winning.innerText = `your number ${inputNumber.value} is too high`;
    }
    else {
        winning.innerText = `your number ${inputNumber.value} is too low`;

    }

    remainingChances--;
    if(remainingChances != 0) {
        chancesLeft.innerText = `Total remaining chances ${remainingChances}`;
    } else {
        setDefaultLevel();
        chancesLeft.innerText = "You ran out of the chances";
    }
}
