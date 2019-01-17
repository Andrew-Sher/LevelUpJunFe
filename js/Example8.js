function reverseArray (array) {
    let a = [];
    for (let i = array.length -1; i >= 0; i--) {
        a.push(array[i]);
    }
    return a;
}
console.log(reverseArray([1,2,3]));