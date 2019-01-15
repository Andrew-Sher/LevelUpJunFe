function isEven (n)  {
    let a = n;
    if (n % 2 === 0) {
        for (let i = 0;  i < n; i++) {
         a -= 1;
        }
        return a ;
    } else {
        for (let i=0; i < n; i++) {
            a -= 1;
        }
        return a + 1 ;
    } 
}
console.log(isEven(-1));