enum Cards {
    JUNQI = 0,
    GONGBING = 1,
    PAIZHANG = 2,
    LIANZHANG = 3,
    YINGZHANG = 4,
    TUANZHANG = 5,
    LVZHANG = 6,
    SHIZHANG = 7,
    JUNZHANG = 8,
    SILING = 9,
    DILEI = 10,
    ZHADAN = 11
}
const cardSizes: object = {
    "juqi": Cards.JUNQI,
    "gobi": Cards.GONGBING,
    "pazh": Cards.PAIZHANG,
    "lizh": Cards.LIANZHANG,
    "yizh": Cards.YINGZHANG,
    "tuzh": Cards.TUANZHANG,
    "lvzh": Cards.LVZHANG,
    "shzh": Cards.SHIZHANG,
    "juzh": Cards.JUNZHANG,
    "sili": Cards.SILING,
    "dile": Cards.DILEI,
    "zhda": Cards.ZHADAN
}
enum Player {RED_BIGGER, BLACK_BIGGER, SELFDESTRUCT, RED_WIN, BLACK_WIN}
const cardIndex: Map<string, number> = new Map(Object.entries(cardSizes));

export {fight, Player, cardIndex, cardSizes, isValid}

function fight(blackCard: string, redCard: string): Player {

    const blackCardSize = cardIndex.get(blackCard);
    const redCardSize = cardIndex.get(redCard);

    if (!blackCardSize || !redCardSize) {
        throw new Error("One of the black or red cards is invalid. Please check again.");
    }

    if ((blackCardSize === Cards.JUNQI) || (redCardSize === Cards.JUNQI)) {
        return (blackCardSize === Cards.JUNQI) ? Player.RED_WIN : Player.BLACK_WIN;
    } else if (blackCardSize === redCardSize) {
        return Player.SELFDESTRUCT;
    } else if ((blackCardSize === Cards.ZHADAN || redCardSize === Cards.ZHADAN)) {
        return Player.SELFDESTRUCT;
    } else if ((blackCardSize === Cards.GONGBING || redCardSize === Cards.GONGBING)) {
        return fightWithGongBing(blackCardSize, redCardSize);
    } else {
        // should be no gongbing, dilei, or zhadan, just cards to compare sizes
        return fightSimple(blackCardSize, redCardSize);
    }
}

function isValid(blackCard: string, redCard: string): boolean {
    if (blackCard.length != 4 || redCard.length != 4) {
        return false;
    } else if (!isValidCard(blackCard) || !isValidCard(redCard)) {
        return false;
    } else {
        return true;
    }
}

function isValidCard(card: string): boolean {
    return Object.keys(cardSizes).includes(card);
}

function fightWithGongBing(blackCardSize: number, redCardSize: number): Player {
    if (blackCardSize === Cards.GONGBING) {
        if (redCardSize === Cards.DILEI) {
            return Player.BLACK_BIGGER;
        }
    } else {
        if (blackCardSize === Cards.DILEI) {
            return Player.RED_BIGGER;
        }
    }
    return fightSimple(blackCardSize, redCardSize);
}


function fightSimple(blackCardSize: number, redCardSize: number): Player {
    if (blackCardSize > redCardSize) {
        return Player.BLACK_BIGGER;
    } else if (blackCardSize < redCardSize) {
        return Player.RED_BIGGER;
    } else {
        return Player.SELFDESTRUCT;
    }
}



