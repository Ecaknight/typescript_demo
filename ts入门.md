### TypeScript入门指南
> TypeScript被称为JavaScript的超集, 它有着JavaScript中没有的类型系统, 还能够做到支持JavaScript的ES6/7的功能.

### 概念认知
**强类型和弱类型**
强类型: 不允许改变数据的数据类型,除非强制进行数据类型转换
弱类型: 变量可以被赋值不同的数据类型

**静态类型语言和动态类型语言**
静态类型语言: 在编译阶段确认所有变量的类型
动态类型语言: 在执行阶段确认所有变量的类型

**简单语法**: 标识符: 数据类型
### 数据类型
> 除了JavaScript中所有的类型外, TypeScript还新增了许多额外的类型, 以满足开发的需求

**Number**
数值类型是简单类型之一
```js
//true
let count: number = 3;

//false
let num: number = '2'; //不能将类型'2'分配给number类型
```
这里定义了一个number类型的变量, 一旦被确定为number, 变量就无法被赋值除number类型以外的类型了.

**String**
字符串类型定义了一个变量只能为字符串
```js
//true
let str: string = 'myname';

//false
let mystr: string = 3; //不能将类型"3"分配给string类型
```
定义一个string类型的变量时, 无法将其他的类型赋值给这个变量, 否则, 将提示报错.

**Boolean**
**Array**
**Function**
**Object**
**Symbol**
**null**
**undefined**
**void**
**any**
**never**
**元组**
**枚举**
**类**
**interface**
