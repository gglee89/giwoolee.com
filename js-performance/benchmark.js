const { performance } = require('perf_hooks')

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const test = () => {
    const add = (point) => point.x + point.y

    const point = new Point(10, 20)
    add(point)
}

let iterations = 1e5

performance.mark('start')

while (iterations--) {
    test()
}

performance.mark('end')

performance.measure('My Special Benchmark', 'start', 'end')

const [measure] = performance.getEntriesByName('My Special Benchmark')
console.log(measure)
