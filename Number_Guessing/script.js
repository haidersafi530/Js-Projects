document.getElementById('checkBtn').addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    const guessInpput = document.getElementById("guessInput");
    const userGuess = parseInt(guessInpput.value);
    guessInpput.value = "";


    const result = document.getElementById('result');

    if(userGuess === randomNumber) {
        result.textContent = "Congragulations";
    }
    else{
        result.textContent = "Try Agian";
        setTimeout(() => {
            result.textContent = '';
        }, 500);
    }
});