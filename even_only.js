function evenOnly(numbers) {
    // console.log(numbers);
    const even = [];
    for (const num of numbers) {
        // console.log(num);
        if (num % 2 === 0) {
            // console.log(num);
            even.push(num)
        }
    }
    return even
}

// const evenArray = [1, 24, 54, 35, 35, 67]
// const evens = evenOnly(evenArray)
// console.log(evens);


// -------------------
function sumOfEvenNumber(numbers) {
    let sum = 0;
    for (const num of numbers) {
        // console.log(num);
        if (num % 2 === 0) {
            // console.log(num);
            sum = sum + num;
        }
    }
    return sum
}
const evenArray = [13, 45, 67, 50, 60, 54, 33]
const totalEven = sumOfEvenNumber(evenArray)
console.log(totalEven);