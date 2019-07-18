let bool: boolean = true;
let num: number | undefined | null = undefined;
let stri: string = 'abc';
//数组
let arr1: number[] = [1, 2, 3];
let stra1: string[] = ['a'];
let arr2: Array<number | string> = [1, 'a'];

//元组
let tuple: [number, string] = [1, '2'];
// tuple.push(1);
// console.log(tuple);
// // tuple[2]

//函数
let add = (x: number, y: number): number => x + y;
let computed: (x: number, y: number) => number
computed= (a, b) => a + b;

//对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 3;

//symbol
let s1: symbol = Symbol();
let s2 = Symbol();

//undefined null
let un: undefined = undefined;
let nu: null = null;
num = undefined;

//void
let noReturn = () => {}

// any
let a;
a = 1;
a = 'c';

//never
let error = () => {
  throw new Error()
}
let endless = () => {
  while(true) {}
}