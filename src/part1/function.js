//函数定义 
function add1(x, y) {
    return x + y;
}
var add2;
add1(1, 2);
//设置可选参数: 可选参数必须在必选参数后面
function add5(x, y) {
    return y ? x + y : x;
}
add5(1);
//设置默认值
function add6(x, y, p, q) {
    if (y === void 0) { y = 3; }
    if (q === void 0) { q = 1; }
    return x + y + p + q;
}
var asd = add6(1, undefined, 2);
// console.log(asd);
function add7(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
add7(1, 2, 3, 4);
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
    if (typeof first === 'string') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add8(1, 3));
console.log(add8('a', 'b', 'c'));
