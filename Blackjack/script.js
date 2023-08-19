let firstCard ;
let secondCard ;
let cards = [] //array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let resetbtn = document.querySelector("#Reset-btn")

let player = {
    Name : "Aditya" ,
    Chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomCard(){
    let randomNumber = (Math.floor(Math.random()*13)+1)

    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    randomNumber1 = (Math.floor(Math.random()*13)+1)
    randomNumber2 = (Math.floor(Math.random()*13)+1)
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ","
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        isAlive = true
        hasBlackJack = false
    }
    else if (sum === 21) {
        message = "You got blackJack"
        hasBlackJack = true
        isAlive = false
    }
    else if (sum > 21){
        message = "You are out of game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

// function reset(){
//     sum = 0
//     cards = []
//     resetbtn.textContent = sum
//     resetbtn.textContent = cards
// }

// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message);

// let carder = [7, 3, 9, 8 ,9 ,6]

// for (i=0 ; i < carder.length; i+=1){
//     console.log(carder[i]);
// }