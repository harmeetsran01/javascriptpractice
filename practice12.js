// Prototype
// Array is a -> Object{Parent} -> null
// String is also a -> Object{Parent} -> null
// function is also a -> Object{Parent} -> null

/*              NULL
                 ^
                 |
    ARRAY ->   OBJECT  <- FUNCTION
                 ^
               STRING
*/
//Object is parent
//prototype works with capturing - bottom to up, 
// will check in array, then object if found ok nhi ta null
function multiplier(num){
    return num*5
}

multiplier.power = 2
console.log(multiplier(5));
console.log(multiplier.power);
console.log(multiplier.prototype);

function User (username,score){
    this.username = username; // here this.username is a global varible
    this.score = score;
    }

// Prototype properties Injection:

User.prototype.increment = function(){ //this keyword not work with arrow function
    this.score++
}
User.prototype.printme = function(){
    console.log(this.score);
    
}

let user1 =  new User('A',1)
let user2 =  new User('B',2)

user1.increment()
user1.printme() //does not need to write .prototype as it is hidden property automatically shifts


//In objects, wraping a certain function in all objs
let obj1 = {
    thor : 'hammer',
    spiderman : 'web'
}

//now the below line will work for Functions, Arrays and Objects
// casue everything is an object
Object.prototype.harmeet = function () {
    console.log('Harmeet method is Present in all Objects');    
}

obj1.harmeet();
// it will also work with arrays

let array1 = ['thor','spiderman']
array1.harmeet()

Array.prototype.meet = function(){
    console.log("meet");    
}

//inheritence
const user5 = {
    user: 'no'
}
const TeachingSupport= {
    isAvailble : false
}
const TASupport = {
    assignment : 'js',
    full: true,
    __proto__: TeachingSupport //hidden, refering to another obj
}

// or old
TeachingSupport.__proto__ = user5


