const numbers = [3, 4, 6, 7, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);

// }

// const square = element => element * element;
// const square = x => x * x;

// function square(element) {
//     return element * element;
// }

// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// });

// const result = numbers.map(x => x * x);

// console.log(result);

const bigger = numbers.filter(x => x < 5);

const isThere = numbers.find(x => x > 5);


console.log(isThere);