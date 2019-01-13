let arr = [];
for ( index = 1; index <= 100; index++ ) {
    arr.push(index);
}
let result = [];
for (let index2 = 1; index2 <= arr.length; index2++ ) {
    if ( index2 % 3 === 0 && index2 % 5 === 0) {
        result.push("FizzBuzz");
    } else if (index2 % 5 === 0){
        result.push("Buzz");
    } else if ( index2 % 3 === 0 ) {
        result.push("Fizz");
    } else {
        result.push(index2);
    }
}
console.log(result);
