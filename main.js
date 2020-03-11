//player1 Dark - #A62A0C Light - #e0765c
//player2 Dark - #0c44a6 Light - #5c60e0

//colors
var DarkRed = "#A62A0C";
var LightRed = "#e0765c";
var DarkBlue = "#0c44a6";
var LightBlue = "#5c60e0";
var ErrorColor = "#ff6161";

var canPlay = false;
var turn = "X";
var buttons = document.querySelectorAll(".btn");

var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");

var player1_input = document.querySelector(".player1_input");
var player2_input = document.querySelector(".player2_input");

var stats = document.querySelector(".stats");

function OnClickNewGame() {
    player1_input = document.querySelector(".player1_input");
    player2_input = document.querySelector(".player2_input");

    if (player1_input.value === " " && player2_input.value === " ") {
        player1_input.style.background = ErrorColor;
        player2_input.style.background = ErrorColor;
    } else if (player1_input.value === " " || player2_input.value === " ") {
        if (player1_input.value === " ") {
            player1_input.style.background = ErrorColor;
            player2_input.style.background = "#fff";
        }
        if (player2_input.value === " ") {
            player1_input.style.background = "#fff";
            player2_input.style.background = ErrorColor;
        }
    } else if (player1_input.value === player2_input.value) {
        player1_input.style.background = ErrorColor;
        player2_input.style.background = ErrorColor;
    } else {
        player1_input.style.background = "#fff";
        player2_input.style.background = "#fff";
        player1.textContent = player1_input.value;
        player2.textContent = player2_input.value;

        turn = "X";
        player1.style.background = DarkRed;
        player2.style.background = LightBlue;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].value = " ";
        }
        stats.textContent = "";
        canPlay = true;
    }
}

function OnClickBlock(id) {
    if (canPlay) {
        var btn = document.querySelector("#" + id);
        if (btn.value === " ") {
            btn.value = turn;
            ChangeTurn();
            CheckWinner();
        }
    }
}

function ChangeTurn() {
    if (turn === "X") {
        turn = "O";
        player1.style.background = LightRed;
        player2.style.background = DarkBlue;
    } else if (turn === "O") {
        turn = "X";
        player1.style.background = DarkRed;
        player2.style.background = LightBlue;
    }
}

function CheckWinner() {
    let draw = true;
    let winner;

    if (buttons[0].value === buttons[1].value && buttons[0].value === buttons[2].value && buttons[0].value !== " ") {
        winner = buttons[0].value;
        draw = false;
    } else if (buttons[3].value === buttons[4].value && buttons[3].value === buttons[5].value && buttons[3].value !== " ") {
        winner = buttons[3].value;
        draw = false;
    } else if (buttons[6].value === buttons[7].value && buttons[6].value === buttons[8].value && buttons[6].value !== " ") {
        winner = buttons[6].value;
        draw = false;
    } else if (buttons[0].value === buttons[3].value && buttons[0].value === buttons[6].value && buttons[0].value !== " ") {
        winner = buttons[0].value;
        draw = false;
    } else if (buttons[1].value === buttons[4].value && buttons[1].value === buttons[7].value && buttons[1].value !== " ") {
        winner = buttons[1].value;
        draw = false;
    } else if (buttons[2].value === buttons[5].value && buttons[2].value === buttons[8].value && buttons[2].value !== " ") {
        winner = buttons[2].value;
        draw = false;
    } else if (buttons[0].value === buttons[4].value && buttons[0].value === buttons[8].value && buttons[0].value !== " ") {
        winner = buttons[0].value;
        draw = false;
    } else if (buttons[2].value === buttons[4].value && buttons[2].value === buttons[6].value && buttons[2].value !== " ") {
        winner = buttons[2].value;
        draw = false;
    } else if (buttons[0].value != " " &&
        buttons[1].value != " " &&
        buttons[2].value != " " &&
        buttons[3].value != " " &&
        buttons[4].value != " " &&
        buttons[5].value != " " &&
        buttons[6].value != " " &&
        buttons[7].value != " " &&
        buttons[8].value != " ") {
        console.log("yaimi");
        draw = true;
        stats.textContent = "Draw!";
        canPlay = false;
    }

    if (!draw) {
        stats.textContent = "Winner: " + winner;
        canPlay = false;
    }
}