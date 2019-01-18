// function isEven (n)  {
//     let a = n;
//     if (n % 2 === 0) {
//         return n - isEven( n-1) ;
//     } else {
//         for (let i=0; i < n; i++) {
//             a -= 1;
//         }
//         return a + 1 ;
//     } 
// }
function isEven(n) {
	if (n == 0) return 0;
    else if (n == 1) return 1;
    else if ( n < 0 ) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(-5));