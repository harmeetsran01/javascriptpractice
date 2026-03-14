const obj = {
    username: "ABC",
    "rollno" : 11101
}
// dot notation for static or literals
obj.address = "Ludhiana"
obj.dob = "1991"
// while bracket notation is used for expression output and dynamic manipulating on runtime
obj['isAvailable'] = true
// let arr
// arr[temp] = 100

console.log(obj);

console.log(obj.username);
console.log(obj.rollno);

console.log(obj["username"]);
console.log(obj["rollno"]);
console.log(obj["isAvailable"]);
console.log(typeof obj["isAvailable"]);


const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);