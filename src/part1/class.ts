// class Dog {
//     constructor(name: string) {
//         this.name = name;
//     }
//     name: string
//     run () {}
//     static food = 'AC';
// }
// console.log(Dog.prototype);
// const dog = new Dog('ww');
// console.log(dog);

// //类的关键字: public protected: 仅能被继承 private: 不能被继承和实例化
// class Husky extends Dog {
//     constructor(name: string, public color: string) {
//         super(name);
//         this.color = color;
//         this.run();
//     }
//     // color: string

// }
// console.log(Husky.food);

//抽象类: 不能被实例
abstract class Animals {
    eat() {
        console.log('eat');
    }
    //抽象的方法
    abstract sleep(): void
}
class Dog extends Animals {
    constructor(){
        super();
    }
    //抽象方法的重载
    sleep() {
        console.log('Dog sleep');
    }
}
const dog = new Dog();
// console.log(dog);
dog.eat();

class Cat extends Animals {
    constructor() {
        super();
    }
    sleep() {
        console.log('Cat sleep');
    }
}
let cat = new Cat();
let animals: Animals[] = [dog, cat];
animals.forEach(i => { i.sleep() });

class Workflow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new Workflow().step1().step2();
class MyFlow extends Workflow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().next().step2();