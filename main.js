//player1 Dark - #A62A0C Light - #e0765c
//player2 Dark - #0c44a6 Light - #5c60e0

var turn = "X";
var buttons = document.querySelectorAll("#btn");

var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");

var player1_input = document.querySelector(".player1_input");
var player2_input = document.querySelector(".player2_input");

function CheckPlayersNames() {
    player1_input = document.querySelector(".player1_input");
    player2_input = document.querySelector(".player2_input");

    if (player1_input.value === "" && player2_input.value === "") {
        player1_input.style.background = "#ff6161";
        player2_input.style.background = "#ff6161";
    } else if (player1_input.value === "" || player2_input.value === "") {
        if (player1_input.value === "") {
            player1_input.style.background = "#ff6161";
            player2_input.style.background = "#fff";
        }
        if (player2_input.value === "") {
            player1_input.style.background = "#fff";
            player2_input.style.background = "#ff6161";
        }
    } else if (player1_input.value === player2_input.value) {
        player1_input.style.background = "#ff6161";
        player2_input.style.background = "#ff6161";
        console.log("saxelebi emtxveva");
    } else {
        player1_input.style.background = "#fff";
        player2_input.style.background = "#fff";
        player1.textContent = player1_input.value;
        player2.textContent = player2_input.value;

        turn = "X";
        player1.style.background = "#A62A0C"; //dark
        player2.style.background = "#5c60e0"; //light
    }
}

function ChangeTurn() {
    if (turn === "X") {
        turn === "O";
        player1.style.background = "#A62A0C"; //light
        player2.style.background = "#A62A0C"; //dark
    } else if (tunr === "O") {
        turn === "X";
        player1.style.background = "#A62A0C"; //dark
        player2.style.background = "#5c60e0"; //light
    }
}

function OnClickBlock() {

    this.value = turn;
}