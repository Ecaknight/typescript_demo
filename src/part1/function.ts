//函数定义 
function add1(x: number, y: number) {
    return x + y;
}
let add2: (x: number, y: number) => number;
//类型别名
type add3 = (x: number, y: number) => number;
interface add4 {
    (x: number, y: number): number
}
add1(1, 2);
//设置可选参数: 可选参数必须在必选参数后面
function add5(x: number, y?: number) {
    return y ? x + y : x;
}
add5(1);
//设置默认值
function add6 (x: number, y = 3, p: number, q = 1) {
    return x + y + p + q;
}
let asd = add6(1, undefined, 2);
// console.log(asd);
function add7 (x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4);

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join();
    }
}
console.log(add8(1, 3));
console.log(add8('a', 'b', 'c'));
