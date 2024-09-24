// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(5, 10));

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(5));

// function isOdd(num) {
//     if (num % 2 === 1) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isOdd(10));
// console.log(isOdd(7));

// function evenSizeString(str) {
//     const size = str.length;
//     console.log(str, size);
//     if (size % 2 === 0) {
//         console.log('even size');
//         return true
//     }
//     else {
//         console.log('odd size');
//         return false
//     }
//     // console.log(size);
// }

// evenSizeString('dhaka')
// evenSizeString('faka')

// function doubleOrTriple(number, doDouble) {
//     if (doDouble === true) {
//         return number * 2;
//     }
//     else {
//         return number * 3;
//     }

// }

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function doubleOrTriple(number, doDouble) {
    if (doDouble) {
        return number * 2;
    }
    else {
        const num = number * 3;
        return num
    }
}

console.log(doubleOrTriple(10, true));
console.log(doubleOrTriple(20, false));