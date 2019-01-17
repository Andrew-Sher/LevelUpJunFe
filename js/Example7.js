function sumArr (start, finish, step = star < end ? 1 : -1 ) {
    let sum = 0;
    let arr = [];
    if (step === undefined) {
        step = 1 ;
    }
    else if ( step < 0) {
        for (let i = finish; i >= start; i+= step){
        arr.push(i);
    }
    }
    for (let i = start; i <= finish; i += step){
        arr.push(i);
    }
    for (let index2 = 0; index2 < arr.length; index2++) {
        sum += arr[index2];
    }
    return sum;
}
console.log(sumArr(1,10, -1));