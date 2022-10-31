var randomNumber;
let remainingChances;

function setDefaultLevel() {
    randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log("random "+randomNumber);
    remainingChances = 4;
}

let inputNumber = document.getElementById('input');
let winning = document.getElementById('winning');
let chancesLeft = document.getElementById('chancesLeft');

function guessNumber() {
    console.log(remainingChances);
    if(inputNumber.value == randomNumber) {
        winning.style.color = "green";
        winning.innerText = `you guess the correct number ${inputNumber.value}`;
        setDefaultLevel();
    }
    else if(inputNumber.value > randomNumber) {
        winning.style.color = "red";
        winning.innerText = `your number ${inputNumber.value} is too high`;
    }
    else {
        winning.style.color = "red";
        winning.innerText = `your number ${inputNumber.value} is too low`;

    }

    inputNumber.value = "";
    remainingChances--;
    if(remainingChances != 0) {
        chancesLeft.innerText = `Total remaining chances ${remainingChances}`;
    } else {
        setDefaultLevel();
        chancesLeft.innerText = "You ran out of the chances";
    }
}
