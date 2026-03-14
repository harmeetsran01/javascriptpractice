
let numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
console.log(numbers);

const fruits = ["Apple", "Banana", "Mango"];

numbers = [1, 2, 3, 4];

const result = numbers
  .map(n => n * 2)      // [2,4,6,8]
  .filter(n => n > 4)   // [6,8]

console.log(result);

const map = new Map();

map.set(1, "number");
map.set(true, "boolean");
map.set({id:1}, "object");

console.log(map.get({id:1}));

const obj = {};

obj[1] = "number";
obj[true] = "boolean";

console.log(obj);

const map2 = new Map();

const user = { name: "Rahul" };

map2.set("user", user);

map2.get("user").name = "Aman";

console.log(map2.get("user"));

// to edit map
const ma3 = new Map();

map3.set("count", 10);

map3.set("count", map.get("count") + 5);

console.log(map3.get("count"));