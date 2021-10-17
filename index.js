var randomNumber = Math.floor(Math.random () * 6) + 1
var randomNumber2 = Math.floor(Math.random () * 6) + 1


var randomDiceImage = "images/dice" + randomNumber + ".png"
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

var leftImg = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage)
var rightImg = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won 😃";
}
else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 won 😃";
}
else{
    document.querySelector("h1").innerHTML = "Draw😃"
}