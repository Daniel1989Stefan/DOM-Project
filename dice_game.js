var rollButton = document.getElementById("rollTheDiceButton");
var title = document.querySelector("h1");
var resetButton = document.getElementById("restartButton");

var photoP1D1 = document.getElementById("photo_dice1_firstPlayer");
var photoP1D2 = document.getElementById("photo_dice2_firstPlayer");
var photoP2D1 = document.getElementById("photo_dice1_secondPlayer");
var photoP2D2 = document.getElementById("photo_dice2_secondPlayer");

var scorePlayer1 = 0;
var theScorePlayer1 = document.getElementById("score1");
var scorePlayer2 = 0; 
var theScorePlayer2 = document.getElementById("score2");



rollButton.addEventListener("click", function(){
    var randomNumberPlayer1D1 = Math.floor((Math.random() * 6) + 1);
    var randomNumberPlayer1D2 = Math.floor((Math.random() * 6) + 1);
    var randomNumberPlayer2D1 = Math.floor((Math.random() * 6) + 1);
    var randomNumberPlayer2D2 = Math.floor((Math.random() * 6) + 1);

    if((randomNumberPlayer1D1 + randomNumberPlayer1D2) > (randomNumberPlayer2D1 + randomNumberPlayer2D2)){
        document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!";
        scorePlayer1 = scorePlayer1 + 1;
        document.getElementById("score1").innerHTML = scorePlayer1;
    } else if((randomNumberPlayer1D1 + randomNumberPlayer1D2) < (randomNumberPlayer2D1 + randomNumberPlayer2D2)){
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;";
        scorePlayer2 = scorePlayer2 + 1;
        document.getElementById("score2").innerHTML = scorePlayer2;
    } else if((randomNumberPlayer1D1 + randomNumberPlayer1D2) === (randomNumberPlayer2D1 + randomNumberPlayer2D2)){
        document.querySelector("h1").innerHTML = "Draw!";
    }

    if(randomNumberPlayer1D1 === 1){
        photoP1D1.setAttribute("src", "./images/dice1.png");
    } else if(randomNumberPlayer1D1 === 2){
        photoP1D1.setAttribute("src", "./images/dice2.png");
    } else if(randomNumberPlayer1D1 === 3){
        photoP1D1.setAttribute("src", "./images/dice3.png");
    } else if(randomNumberPlayer1D1 === 4){
        photoP1D1.setAttribute("src", "./images/dice4.png");
    } else if(randomNumberPlayer1D1 === 5){
        photoP1D1.setAttribute("src", "./images/dice5.png");
    } else if(randomNumberPlayer1D1 === 6){
        photoP1D1.setAttribute("src", "./images/dice6.png")
    }

    if(randomNumberPlayer1D2 === 1){
        photoP1D2.setAttribute("src", "./images/dice1.png"); 
    } else if(randomNumberPlayer1D2 === 2){
        photoP1D2.setAttribute("src", "./images/dice2.png");
    } else if(randomNumberPlayer1D2 === 3){
        photoP1D2.setAttribute("src", "./images/dice3.png");
    } else if(randomNumberPlayer1D2 === 4){
        photoP1D2.setAttribute("src", "./images/dice4.png");
    } else if(randomNumberPlayer1D2 === 5){
        photoP1D2.setAttribute("src", "./images/dice5.png");
    }else if(randomNumberPlayer1D2 === 6){
        photoP1D2.setAttribute("src", "./images/dice6.png");
    }

    if(randomNumberPlayer2D1 === 1){
        photoP2D1.setAttribute("src", "./images/dice1.png");
    } else if(randomNumberPlayer2D1 === 2){
        photoP2D1.setAttribute("src", "./images/dice2.png");
    } else if(randomNumberPlayer2D1 === 3){
        photoP2D1.setAttribute("src", "./images/dice3.png");
    } else if(randomNumberPlayer2D1 === 4){
        photoP2D1.setAttribute("src", "./images/dice4.png");
    } else if(randomNumberPlayer2D1 === 5){
        photoP2D1.setAttribute("src", "./images/dice5.png");
    } else if(randomNumberPlayer2D1 === 6){
        photoP2D1.setAttribute("src", "./images/dice6.png");
    }

    if(randomNumberPlayer2D2 === 1){
        photoP2D2.setAttribute("src", "./images/dice1.png");
    } else if(randomNumberPlayer2D2 === 2){
        photoP2D2.setAttribute("src", "./images/dice2.png");
    } else if(randomNumberPlayer2D2 === 3){
        photoP2D2.setAttribute("src", "./images/dice3.png");
    } else if(randomNumberPlayer2D2 === 4){
        photoP2D2.setAttribute("src", "./images/dice4.png");
    } else if(randomNumberPlayer2D2 === 5){
        photoP2D2.setAttribute("src", "./images/dice5.png");
    } else if(randomNumberPlayer2D2 === 6){
        photoP2D2.setAttribute("src", "./images/dice6.png");
    }
} );

resetButton.addEventListener("click", function(){
    title.innerHTML = "Roll the dice!";
    photoP1D1.setAttribute("src", "./images/dice6.png");
    photoP1D2.setAttribute("src", "./images/dice6.png");
    photoP2D1.setAttribute("src", "./images/dice6.png");
    photoP2D2.setAttribute("src", "./images/dice6.png");
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.getElementById("score1").innerHTML = scorePlayer1;
    document.getElementById("score2").innerHTML = scorePlayer2;
});