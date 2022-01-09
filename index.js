

// function sum(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		}
// 	}
// }

// sum(1)(2)(3);


// function sum(a, b, c) {
// 	return a + b + c;
// }

// function curry(fn) {
// 	return function curried(...args) {
// 		if (args.length >= fn.length) {
// 			return fn(...args);
// 		}
// 		return function (...args2) {
// 			return curried(...args, ...args2);
// 		}
// 	}

// }

// const curriedSum = curry(sum);

// console.log(curriedSum(3, 10)(3));