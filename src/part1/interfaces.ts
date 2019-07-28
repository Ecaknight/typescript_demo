//
interface List {
    id: number;
    name: string;
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name);
    });
}
let result = {
    data: [
        {id: 1, name: 'xx', age: 12},
        {id: 2, name: 'yy', }
    ]
}
render(result);
//类型断言
// render(<Result>{
//     data: [
//         {id: 1, name: 'xx', age: 12},
//         {id: 2, name: 'yy'}
//     ]
// })