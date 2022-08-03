let cards = []
let dealerCards = []
let dealerSum = 0;
let sum = 0;
let isAlive = false;
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let textEl = document.getElementById("text-decoration")
let dealerCardsEl = document.getElementById("dcards-el")
let dealerSumEl = document.getElementById("dsum-el")
let playerEl = document.getElementById("player-el")
let win = new Audio("win.wav")
let lose = new Audio("lose2.wav")
let lose2 = new Audio("off.wav")
let player = {
    name:"Tudor",
    bet:100
}




function getRandom(){
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if(randomNumber === 1 )
        return 11
    else if (randomNumber > 10)
        return 10
    else
        return randomNumber;
}

function start(){
    if(isAlive === false)
    {   
        textEl.textContent = "Want to play a round ? "
        isAlive = true;
        let firstCard = getRandom()
        let secondCard = getRandom()
        let dealerFirstCard = getRandom()
        cards = [firstCard,secondCard]
        dealerCards = [dealerFirstCard]
        render()
    }
    else textEl.textContent = "Game already started!"

    playerEl.textContent = player.name + " $" + player.bet


}
function render(){ 

    if(isAlive === true)
    {   
        cardsEl.textContent = "Your Cards: "
        dealerCardsEl.textContent = "Dealer Cards: "
        sum = 0;
        dealerSum = 0;
        for(let i = 0 ; i<cards.length ; i++)
        {
            cardsEl.textContent += cards[i] + " "
            sum = sum + cards[i]
        }
        for(let i = 0 ; i< dealerCards.length ; i ++)
        {   
            dealerCardsEl.textContent += dealerCards[i] + " "
            dealerSum= dealerSum + dealerCards[i]
        }
        sumEl.textContent = "Your Sum: " + sum;
        dealerSumEl.textContent = "Dealer sum: " + dealerSum
    }

    if( sum >= 21 || dealerSum >= 21)
    {
        isAlive = false;
        console.log("Game over")
    }

    if(isAlive === false)
    {
        if(sum > 21)
        {
            textEl.textContent = "BUST ! You Lost !"
        }
        else if (dealerSum > 21 )
        {
            textEl.textContent = "Dealer Bust ! You Won !"
            win.play();
        }
        else if( sum === 21)
        {
            textEl.textContent = "You Won !"
            win.play();
        }
        else if(dealerSum  === 21)
        {
            textEl.textContent = "Dealer Won !"
            lose.play()
        }
        
    }
    }
function reset(){
    isAlive = false
    cards = []
    dealerCards = []
    sum = 0;
    dealerSum = 0;
    cardsEl.textContent = "Your Cards: ";
    sumEl.textContent = "Your Sum: ";
    dealerCardsEl.textContent = "Dealer Cards: "
    dealerSumEl.textContent = "Dealer Sum: ";
    textEl.textContent = "Want to play a round ? "
}

function addNewCard(){
    if(isAlive === true)
    {
    let newCard = getRandom()
    let dealerNewCard = getRandom()
    cards.push(newCard)
    dealerCards.push(dealerNewCard)
    render()
    }
}