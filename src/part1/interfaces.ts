//
// interface List {
//     readonly id: number;
//     name: string;
//     age?: number;
// }
// interface Result {
//     data: List[]
// }
// function render(result: Result) {
//     result.data.forEach(item => {
//         console.log(item.id, item.name);
//         if (item.age) {
//             console.log(item.age);
//         }
//         // item.id++;
//     });
// }
// let result = {
//     data: [
//         {id: 1, name: 'xx', age: 12},
//         {id: 2, name: 'yy', sex: '男'}
//     ]
// }

// render(result);
//类型断言
// render(<Result>{
//     data: [
//         {id: 1, name: 'xx', age: 12},
//         {id: 2, name: 'yy'}
//     ]
// })
// interface StringArray {
//     [index: number]: string;
// }
// let chars: StringArray = ['a', 'b'];

// interface Names {
//     [x: string]: any;
//     [z: number]: number;
// }
//函数类型
// let addT: (x: number, y: number) => number;
// interface Add {
//     (x: number, y: number): number
// }
//
// type Add = (x: number, y: number) => number;
// let adds: Add = (a, b) => a + b;
//混合类型
// interface Lib {
//     (): void;
//     version: string;
//     doSomething(): void;
// }
// function getLib() {
//     let lib = (() => {}) as Lib
//     lib.version = '1.0.0'
//     lib.doSomething = () => {}
//     return lib;
// }
// let lib1 = getLib();
// lib1();
// let lib2 = getLib();
// lib2.doSomething();
// const st1: string = 3;