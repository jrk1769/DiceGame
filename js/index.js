var ranNum1 = Math.floor(Math.random() * 6) + 1;
var imgRan1 = "images/dice" + ranNum1 + ".png";

var player1 = document.querySelectorAll("img")[0].setAttribute("src", imgRan1);

var ranNum2 = Math.floor(Math.random() * 6) + 1;
var imgRan2 = "images/dice" + ranNum2 + ".png";

var player2 = document.querySelectorAll("img")[1].setAttribute("src", imgRan2);

if(ranNum1 > ranNum2) {
	document.querySelector("h1").innerHTML = "Player 1 wins 🏁";
} else if(ranNum1 < ranNum2) {
	document.querySelector("h1").innerHTML = "Player 2 wins 🏁";
} else {
	document.querySelector("h1").innerHTML = "Draw";
}