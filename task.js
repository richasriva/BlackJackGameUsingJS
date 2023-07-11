let cards=[]  //arrray
let sum = 0 
console.log(sum)
let hasBlackJack= false
let isAlive = false
let message = " "
let messageEl= document.getElementById("one")
let sumEl = document.querySelector("#three")
let cardsEl = document.getElementById("two")

function getRandomCard(){
    let random= Math.floor(Math.random()*13)+1
    if(random>10){
        return 10
    }else if(random===1){
        return 11
    }else{
        return random
    }
}

//if html have class = three then we can do ".three" in querySelector, it work like css
console.log(messageEl)
function startGame(){
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard+secondCard
    renderGame()
}
function renderGame(){
    //rendering cards
    cardsEl.textContent= "Cards: "
    for(let i=0; i<cards.length ; i++){
        cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent="Sum: "+ sum
    if(sum <= 20){
    message ="Want to draw a new card? 🤔"
}else if(sum === 21){
    message ="You've got a Blackjack!"
    hasBlackJack = true
}else{
    message ="You are out of the game! 🙄 "
    isalive =false
}
messageEl.textContent=message
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

