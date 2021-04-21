// console.log(Number(" ")); //0
// console.log(Number(undefined)); //nan
// console.log(parseInt("123nab"));
// console.log(Number(" "));
// console.log(Number(null)); //0
// console.log(null == undefined); //t
// console.log(NaN == NaN); //f
// console.log(NaN === NaN); //f
// console.log(Object.is(NaN, NaN)); //t
console.log(+0 == -0); //t
console.log(+0 === -0); //t
console.log(Object.is(+0, -0)); //f