//call()
function setUsername (username)  {
this.username  = username
console.log("setUsername is called!");

}

function createUser (username, email, password){
    setUsername.call(this, username)
    // call() is used to call another object function to inside a function 
    // and passing the arguments and context of the varible
    // call() lets you borrow a function from another object and control what this refers to.
    this.email = email
    this.password = password
}

let temp = new createUser('ABC', 'example.com', 123)
console.log(temp);

const person = {
  name: "Rahul"
};
function greet() { //default taking greet(this)
  console.log("Hello " + this.name); //will set this as person.name
}
greet.call(person);

const person1 = {
  name: "Rahul",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const person2 = {
  name: "Aman"
};

person1.greet.call(person2);
