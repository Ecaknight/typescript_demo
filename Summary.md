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