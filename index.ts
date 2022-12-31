let blackCard: string;
let redCard: string;
const cardSizes: object = {
    "gong": 1,
    "pai": 2,
    "lian": 3,
    "ying": 4,
    "tuan": 5,
    "lv": 6,
    "shi": 7,
    "jun": 8,
    "si": 9
}
    
const cardIndex: Map<string, number> = new Map(Object.entries(cardSizes));


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

function displayResult(): void{
    throw new Error("Function not implemented.");
}

