'use strict'

function increment(x) {
    return x + 1
}
function decrement(x) {
    return x - 1
}
function double(x) {
    return x * 2
}
function half(x) {
    return x / 2
}

function compose(fn4, fn3, fn2, fn1) {
    return function (v) {
        if (!fn1 && !fn2 && !fn3) return fn4(v)
        if (!fn1 && !fn2) return fn4(fn3(v))
        if (!fn1) return fn4(fn3(fn2(v)))
        return fn4(fn3(fn2(fn1(v))))
    }
}
function pipe(fn1, fn2, fn3, fn4) {
    return function (v) {
        if (!fn4 && !fn3 && !fn2) return fn1(v)
        if (!fn4 && !fn3) return fn2(fn1(v))
        if (!fn4) return fn3(fn2(fn1(v)))
        return fn4(fn3(fn2(fn1(v))))
    }
}

var f1 = compose(increment, decrement)
var f2 = pipe(decrement, increment)
var f3 = compose(decrement, double, increment, half)
var f4 = pipe(half, increment, double, decrement)
var f5 = compose(increment)
var f6 = pipe(increment)

console.log(f1(3) === 3)
console.log(f1(3) === f2(3))
console.log(f3(3) === 4)
console.log(f3(3) === f4(3))
console.log(f5(3) === 4)
console.log(f5(3) === f6(3))
