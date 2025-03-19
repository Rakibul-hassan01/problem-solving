

const candles = [2,4,5,4,6,4,6,6,1,6];


function bithDayCacke (candles) {
    const talestCandles = [];
    let initalTalestCandle = Math.max(...candles);
    candles.forEach(candle => {
        if (initalTalestCandle <= candle) {
            talestCandles.push(candle)
        }
    })
    return talestCandles.length;
}

const result = bithDayCacke(candles);
console.log(result)