import { fight, isValid, Player } from "./src/card";

function getCards(): void {

    var blackCard = (document.getElementById("black-card") as HTMLInputElement).value;
    var redCard = (document.getElementById("red-card") as HTMLInputElement).value;
    
    if (!isValid(blackCard, redCard)) {
        throw new Error("One of the black or red cards is invalid. Please check again.");
    }

    let result: Player = fight(blackCard, redCard);
    displayResult(result);
}

function displayResult(result: Player): void {
    let message: string;
    if (result === Player.BLACK_WIN) {
        message = "Player black won the game!";
    } else if (result === Player.RED_WIN) {
        message = "Player RED won the game!";
    } else if (result === Player.BLACK_BIGGER) {
        message = "The black card survives!";
    } else if (result === Player.RED_BIGGER) {
        message = "The red card survives!"
    } else {
        message = "Both cards die!"
    }
    console.log(message);
}

