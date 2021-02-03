// function doubleIt(num) {
//     return num * 2;
// }


// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;    // arrow function
const add = (x,y) => x + y;         // arrow function

const result = doubleIt(5);
console.log(result);

const sum = add(5,10);
console.log(sum);

const functionWithMultilineCode = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}