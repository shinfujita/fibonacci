'use strict';
//　トリボナッチ数列
//　Fn=Fn−1+Fn−2(n≧0)
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2) + fib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}


//　線形オーダー（O記法）
/* const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
} */

//　指数オーダー（O記法）
/* function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
    console.log(n);
    console.log(fib);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
} */
