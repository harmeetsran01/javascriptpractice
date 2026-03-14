//Control Flow or Logic Flow in 1 shot
console.log("hlo");
const arr = [100,200,300]
const temp = [];
for (const i of arr){ //For Of loop is used to iterate over the values of an array or iterable object
    console.log(i);   // For in loop is used to iterate over the properties {key} of an object or the indices of an array
    temp.push(i)
}
console.log(temp);
//Map
//For Of loop is used to iterate over the values of an array or iterable object

const map = new Map();
map.set("name","john");
map.set("age",30);
map.set("city","new york");

console.log(map);

// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.get("city"));

for (let [key, value] of map.entries()){
    console.log(key+ ':' + value);
}

let json = {
    'FirstGame': 'NFS',
}

json = {
    FirstGame: 'NFS',
    SecondGame: 'FIFA',
    ThirdGame: 'COD'
}
for (let key in json){  // For in loop is used to iterate over the properties of an object or the indices of an array
    console.log(key + ':' + json[key]);
}

//for each loop is used to iterate over the elements of an array or iterable object
let arr2 = [1,2,3,4,5];
arr2.forEach((element) => { //For each is callback function which is called for each element in the array, just like recursion
    console.log(element);
})

arr2.forEach((element, index,arr2) => {
    console.log(`${element} so this element at ${index} of ${arr2}`);    
})

let mycoding = [{
    language: 'javascript',
    framework: 'react'
},
{
    language: 'python',
    framework: 'django'
},
{
    language: 'cpp',
    framework: 'nothing'
}
]

let tempu = mycoding.forEach((element) => {
    console.log(element.language + ' ' + element.framework);
})
console.log(tempu);
tempu = mycoding.map((element) => {
    return element.language + ' ' + element.framework;
})
console.log(tempu);
console.log(typeof tempu);

