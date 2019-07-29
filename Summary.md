安装typeScript
```js
npm install typescript -g //全局安装, 可以支持局部安装去掉-g
```

初始化typeScript
```js
tsc --init  //这样就可以帮我们直接建立tsconfig.json文件,如果需要需要配置可以在里面修改
```

编译代码
```js
tsc 文件路径
tsc ./scr/index.ts //通过tsc将代码编译成js文件
```

ts语法
```js
标识: 类型 eg:  `let str: string`
```
ts的类型中包含了js的所有类型,其中增加了any, never, void(js也有), 元组(这个比较独特)
void: 但函数没有返回值的时候,为void
never: 函数抛出异常, 或者死循环的时候
元组: 定义数组类型, 尽管对于数组可以增删, 但是却不可以对增加的元素进行访问, 会报错

枚举: `enum`

函数

类
语法:
```js
class 类名(帕斯卡命名) {
  constructor(name: string) {
    this.name = name; //对成员变量进行初始化
  }
  name: string; //成员变量
  run(): void;
}
```

类可以被继承: `extends` (继承关键字)
```js
class 子类名 extends 父类名 { ... }
```

类的关键字: public protected private
对于被protected限制的变量或者方法, 只能被子类继承, 不能被实例化对象所调用
对于被private限制的变量或者方法, 只能用类自身, 不能被实例化或者继承

类的静态成员: `static` (关键字), 调用: 类名.变量名/方法名

接口: `interface`

泛型