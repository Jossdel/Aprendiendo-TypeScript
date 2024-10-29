"use strict";
let a = 0;
let b = 1;
let c = 0;
do {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
} while (c <= 21);
//# sourceMappingURL=Fibonacci.js.map