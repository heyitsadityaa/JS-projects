randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNumber);
// GuessCount
outputBox = document.getElementById("outputBox");
// reset
submit = document.getElementById("submit")
inputBox = document.getElementById("inputBox").value;
winnerResult = document.getElementById ("winnerResult")
winnerResult = document.getElementById ("winnerResultWrong")

function checkNumber(){
    if(inputBox > randomNumber){
        return "Your number is too high"
    }
    else if (inputBox < randomNumber){
        return "Your number is too low"
    }
    else if (inputBox == randomNumber){
        return "You Won"
    }
    else {
        return "error"
    }
}

submit.addEventListener("click",()=>{
    inputBox = document.getElementById("inputBox").value;
    const result = checkNumber(inputBox);
    outputBox.innerText += inputBox + " - "
    winnerResult.innerText += result + "\n"
})
