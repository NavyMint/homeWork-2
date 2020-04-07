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

const withCompose2 = compose(
    fn2,
    fn2,
    fn2
);

const superPuper = compose(
    withCompose,
    withCompose2
);

console.log(superPuper(matrix));
 