Parsing can be slow.
As as **1MB/s on mobile**

One way to reduce the parsing time is to have less code
Another way is todo as much parsing as you need and as little as you can get away with.

### Parsing happens in two phases

-   eager (full parse) This is what you think of when you think about parsing.
-   lazy (pre-parse) do the bare minimum now. We'll parse it for realsies later.

> In general lazy loading is a good thing.

### The basic rules

-   Scan through the top-level scope. Parse all the code you see that's actually doing something.
-   Skip things like function declarations and classes for now. We'll parse them when we need them.

### This could bit us. But how?

```js
// These will be eagerly-parsed
const a = 1
const b = 2

// Take not that there's a function here,
// but, we'll parse the body when we need it
function add(a, b) {
    return x + y
}

add(a, b) // Whoa. Go back and parse add()!
```

**Corollary:** Doing stuff twice is slower than doing it once.

### Try to avoid nested functions

```js
function sumOfSquares(x, y) {
    // this nested function will repeatedly be parsed.
    function square(n) {
        return n * n
    }

    return square(x) + square(y)
}
```

If move that out

```js
function square(n) {
    return n * n
}
function sumOfSquares(x, y) {
    return square(x) + square(y)
}
```

### Okay, cool - so it's parsed. Now what?
