'use strict'

function lotteryNum() {
    return (Math.round(Math.random() * 100) % 58) + 1
}

function pickNumber(lotteryNumbers, newNumber) {
    const numbers = [...lotteryNumbers, newNumber]
    return numbers.sort((a, b) => a - b)
}

var luckyLotteryNumbers = []
const NUM_COUNT = 6

while (luckyLotteryNumbers.length < NUM_COUNT) {
    const newNumber = lotteryNum()
    if (!luckyLotteryNumbers.includes(newNumber)) {
        luckyLotteryNumbers = pickNumber(
            Object.freeze(luckyLotteryNumbers),
            newNumber
        )
    }
}

console.log(luckyLotteryNumbers)
