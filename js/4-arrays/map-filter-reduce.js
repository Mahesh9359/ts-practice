"use strict";
// map (transform)
const squares = [1, 2, 3].map(x => x * x); // [1,4,9]
//filter (select)
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2,4]
//reduce (aggregate)
const sum1 = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
//chaining
const result1 = [1, 2, 3, 4]
    .filter(x => x > 2)
    .map(x => x * 2); // [6,8]
