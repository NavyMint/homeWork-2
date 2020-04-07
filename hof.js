let matrix = [1,2,3];
 
function fn1(matrix) {
    return matrix.map(el => el*2);
}
 
function fn2(matrix) {
    return matrix.map(el => el/2);
}
 
function fn3(matrix) {
    return matrix.map(el => el*3);
}
 
let res1 = fn3(fn2(fn1(matrix)));
console.log(res1);
 
function compose(...args) {
 return (matrx) => {
    return args.reduce((acc,fnc)=> fnc(acc), matrx);
 }
}

const withCompose = compose(
    fn1,
    fn2,
    fn3
);

console.log(withCompose(matrix));
 