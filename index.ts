let blackCard: string;
let redCard: string;

function getCards(): void {
    blackCard = (document.getElementById("black-card") as HTMLInputElement).value;
    redCard = (document.getElementById("red-card") as HTMLInputElement).value;
    // console.log("Black: ", blackCard);
    // console.log("Red: ", redCard);

    let result = calculateResult(blackCard, redCard);
    displayResult();
}

function calculateResult(blackCard: string, redCard: string) {
    throw new Error("Function not implemented.");
}

function displayResult() {
    throw new Error("Function not implemented.");
}

