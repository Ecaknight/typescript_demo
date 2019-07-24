function render(result) {
    result.data.forEach(function (item) {
        console.log(item.id, item.name);
    });
}
var result = {
    data: [
        { id: 1, name: 'xx', age: 12 },
        { id: 2, name: 'yy' }
    ]
};
render(result);
