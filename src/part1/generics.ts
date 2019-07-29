// function log<T>(value: T) : T {
//   console.log(value);
//   return value;
// }
// //假设添加string[]
// // function log(value: string | string[]): string | string[] {
// //   console.log(value);
// //   return value;
// // }

// //泛型函数类型
// log<string[]>(['a', 'b']);
// // log(['a', 'b'])
// log<string>('c');

// // type Log = <T>(value : T) => T;
// // let myLog: Log = log;
// // myLog<string>('a');

// //泛型 接口
// interface Log<T = string> { //T在此, 约束所有接口参数, = 为设置默认值
//   (value : T): T
// }
// let myLog: Log = log;
// log(1);

//泛型 类
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Log<number>();
log1.run(1);
let log2 = new Log();
log2.run({ a: 1 });

interface Length {
  length: number;
}
function logAdvance<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

logAdvance('111');
logAdvance([1]);
logAdvance({ length: 1 });