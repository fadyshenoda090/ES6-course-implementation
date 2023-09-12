let arr=[10,20,10,30,50,30,]
let mySet=new Set(arr)
console.log(`array with repeats ${arr}`)
console.log(`new array without repeats ${mySet}`);
let newArray=[...mySet];

let myMap=new Map(
    [
        ['syaaa7',"kak"],
        ['adj',"3atah"]
    ]
);

myMap.set(50,"hell");

for(let [k,v] of myMap){
    console.log(`key =${k} , value =${v}`);
}