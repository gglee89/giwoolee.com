'use strict'

function output(txt) {
    console.log(txt)
}

function printIf(shouldPrintIt) {
    return function (msg) {
        if (shouldPrintIt(msg)) {
            output(msg)
        }
    }
}

function not(fn) {
    return function negated(args) {
        return !fn(args)
    }
}

function isShortEnough(str) {
    return str.length <= 5
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }
const isLongEnough = not(isShortEnough)

var msg1 = 'Hello'
var msg2 = msg1 + ' World'

printIf(isShortEnough)(msg1) // Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2) // Hello World

function mod(y) {
    return function forX(x) {
        return x % y
    }
}

console.log('10 % 3 = ', mod(3)(10))
