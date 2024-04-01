'use strict'

// Put your code here! :)
function constant(value) {
    return function f() {
        return value
    }
}

function add(x, y) {
    return x + y
}

function add2(fn1, fn2) {
    return add(fn1(), fn2())
}

// iterative
// function addn(...fns) {
//     while (fns.length > 2) {
//         const [fn0, fn1, ...rest] = fns
//         fns.splice(0, 2, function f() {
//             return add2(fn0, fn1)
//         })
//     }
//     return add2(fns[0], fns[1])
// }

// recursively
// function addn(...fns) {
//     if (fns.length < 3) {
//         return add2(fns[0], fns[1])
//     }

//     const [fn0, fn1, ...rest] = fns
//     return addn(function () {
//         return add2(fn0, fn1)
//     }, ...rest)
// }

// reduce
function addn(...fns) {
    return fns.reduce(function (bigFn, fn) {
        return function () {
            return add2(bigFn, fn)
        }
    })()
}

console.log(addn(constant(3), constant(7))) // 10
console.log(addn(constant(3), constant(7), constant(11))) // 21

const numbers = [1, 2, 3, 3, 6, 5, 5, 9, 11, 13]

function unique(array) {
    return array.reduce((acc, value) => {
        if (!acc.includes(value)) {
            return [...acc, value]
        }
        return acc
    }, [])
}

function even(array) {
    return array.reduce((acc, value) => {
        if (value % 2 == 0) {
            return [...acc, value]
        }
        return acc
    }, [])
}

console.log(unique(numbers))
console.log(even(numbers))

var list = [1, 3, 4, 6, 9, 12, 13, 16, 21]

function listCombination(list, v) {
    list.push(v)
    return list
}

function mapReducer(mappingFn) {
    return function reducer(list, v) {
        return listCombination(list, mappingFn(v))
    }
}

function filterReducer(predicateFn) {
    return function reducer(list, v) {
        if (predicateFn(v)) return listCombination(list, v)
        return list
    }
}

function sum(acc, v) {
    return acc + v
}

function add1(v) {
    return v + 1
}

function isOdd(v) {
    return v % 2 > 0
}

console.log(list)
var add1Result = list.reduce(mapReducer(add1), [])
console.log(add1Result)
var isOddResult = add1Result.reduce(filterReducer(isOdd), [])
console.log(isOddResult)
var result = isOddResult.reduce(sum)
console.log(result)
