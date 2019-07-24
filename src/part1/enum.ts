// //枚举类型的写法
// enum Role {
//     Reporter = 1,
//     Developer,
//     Maintainer,
//     Owner,
//     Guest
// }
// console.log(Role);

// //字符串枚举
// enum Message {
//     Success = '成功了',
//     fail = '失败了',
//     a = 1
// }
// console.log(Message);

// //异构枚举
// enum Answer {
//     N,
//     Y = 'yes',
// }

// //枚举成员
// // Role.Reporter = 1  //报错, 枚举成员只读
// enum Char {
//     //const
//     a,
//     b = Char.a,
//     c = 1 + 3,
//     //computed
//     d = Math.random(),
//     e = '123'.length,
//     f = 4
// }

// //常亮枚举
// const enum Month {
//     Jan,
//     Feb,
//     Mar,
//     Apr = Month.Mar + 1
// }
// let month = [Month.Jan, Month.Feb, Month.Mar];

// //相同的类型才能进行比较
// enum E { a, b }
// enum F { a = 0, b = 1 }
// enum G { a = 'apple', b = 'banner' }
// let e: E = 3;
// let f: F = 3;
// // e === f

//练习题
enum Role {
    GUEST = 1,
    ADMIN,
    SUPERADMIN
}
function initRole(role: number) {
    if (role === Role.GUEST) {
        console.log('111');
    } else if (role === Role.ADMIN) {
        console.log('222');
    } else {
        console.log('333');
    }
}
