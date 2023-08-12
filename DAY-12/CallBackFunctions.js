// // Basics of Arrow Functions

// const greet = (count) => {
//   for (let i = 1; i < count; i++) {
//     console.log(i);
//   }
//   console.log("Hello World!");
// };

// greet(2);
// //Syntax
// const square = (num) => num * num;
// console.log(square(2));
// //CallBack Functions
// function greeti(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }
// function callback() {
//   console.log("How are You!");
// }
// greeti("Ravi", callback);

// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };
// //Method-1
// console.log(
//   calculate(1, 2, function (a, b) {
//     return a + b;
//   })
// );
// //Method-2
// const subtraction = (a, b) => a - b;
// console.log(calculate(5, 6, subtraction));

// //Method-3
// function multiply(a, b) {
//   return a * b;
// }
// console.log(calculate(2, 4, multiply));

//Array Callback Functions
const arr = [3, 2, -7, 8, 9, -1, 2, 4, 3, 9];

// const firstNegative = (num) => {
//   return num < 0;
// };
// console.log(arr.find(firstNegative));
// console.log(arr.findIndex(firstNegative));
arr.forEach((num,i)=>{
    console.log(num,i);
});