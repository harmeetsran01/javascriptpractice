//Map
//For Of loop is used to iterate over the values of an array or iterable object
//Most of the Arrays and Objects have thier own built in methods and callback functions 
// which are used to perform various operations on them, like map, filter, reduce, forEach etc.
//Implicit return, without {} in a single line
//Explicit return, with {} in multiple lines + have to use return keyword
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

let mynums = [1,2,3,4,5];
console.log(mynums.filter((num) => num >2)); //Implicit return, without {} in a single line
console.log(mynums);
console.log(mynums.reduce((acc, num) => acc + num, 0)); //sum of all elements
 // 0 is the initial value of the accumulator



 //Filter Also can be  used on webpage to filter the data based on user input,
 //  like search bar, dropdown etc.
 let books = [
    {title: 'Book 1', author: 'Author 1', year: 2020},
    {title: 'Book 2', author: 'Author 2', year: 2019},
    {title: 'Book 3', author: 'Author 3', year: 2021},
    {title: 'Book 4', author: 'Author 4', year: 2018}]

let userbooks = books.filter((bk) => bk.year > 2020);
console.log(userbooks[0].title);    

mynums.forEach((num) => num + 10);
for (let [index, num] of mynums.entries()){
    mynums[index] = num + 10;
}
console.log(mynums); 

//or using map method, which returns a new array with the modified values,
//  without changing the original array

mynums = mynums.map((num) => num + 10);
console.log(mynums);

//Chaining of methods, like filter and map together,
//  to perform multiple operations on the array in a single line of code

// const temp.filter((num) => num > 20).map((num) => num + 10);
// how chain works is, first filter method is called on the temp array,
//  which returns a new array with the filtered values, 
// then map method is called on the filtered array, 
// which returns a new array with the modified values,
//  and finally the modified array is returned as the result of the chain.

let shoppingcart = [
    {item: 'Laptop', price: 1000},
    {item: 'Phone', price: 500},
    {item: 'Tablet', price: 300},
    {item: 'Headphones', price: 100}
]
let totalprice = shoppingcart.filter((product) => product.price > 300)
console.log(totalprice);
totalprice = totalprice.map((product) => product.price)
console.log(totalprice);
totalprice = totalprice.reduce((acc , price)=> {return acc + price}, 0);
console.log(totalprice);
//through chaining

totalprice = shoppingcart.filter((product) => product.price > 300)
.map((product) => product.price)
.reduce((acc , price)=> {return acc + price}, 0);