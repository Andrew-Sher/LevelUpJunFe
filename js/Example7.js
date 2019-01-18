function sumArr (start, finish, step) {
    let sum = 0;
    let arr = [];
    if (step === undefined) {
        step = 1 ;
    }
    for (let i = start; i <= finish; i += step){
        arr.push(i);
    }
    for (let index2 = 0; index2 < arr.length; index2++) {
        sum += arr[index2];
    }
    return sum;
}
console.log(sumArr(1,10, 2));