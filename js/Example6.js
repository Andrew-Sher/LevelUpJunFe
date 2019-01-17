function countBs (str) {
    let a = 0;
    for (let i = 0; i <= str.length; i++) {
        if ( str[i] === "B") {
            a += 1;
        } else {}
    }
    return a;
}
console.log(countBs("BBBSS"));
function countChar (str, symbol) {
    let a = 0;
    for (let i = 0; i <= str.length; i++) {
        if ( str[i] === symbol) {
            a += 1;
        } else {}
    }
    return a;
}
console.log(countChar("BBBSS", "S"));