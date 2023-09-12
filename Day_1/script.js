var num1 = 5;
var num2 = 6;
var [num1, num2] = [num2, num1];
console.log(num1, num2);

var arr = [10, 50, 100, 10000, 5, 1];
console.log( Math.min(...arr));
console.log(Math.max(...arr))
var fruit = ['apple', 'orange', 'mango', 'banana', 'strawberry'];
var suiii=fruit.every(checkStr)
function checkStr(item){
    return typeof(item) === 'string';
}
console.log(suiii);
var kak = fruit.some(checkStart)
function checkStart(item) {
    return item.startsWith('a');
}
console.log(kak);


var res = fruit.filter((item,) => {
    return item.startsWith('b')|| item.startsWith('a')||item.startsWith('s');
})
console.log(res);

var resu=fruit.map((item)=>{
    return `i like ${item}`
})
console.log(resu);
resu.forEach(item => {
    console.log(item);
});