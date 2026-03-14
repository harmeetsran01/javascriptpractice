//OOP
// this also explained in prac12
    //{this} means current context or access parent properties
    //arrow function have not {this} keyword
    //using this keyword in function constructor converts function to class
    //IMPORTANT will act as class but will printing, it will also shows
    //Function name:=> User {
    //                      }
    //Constructor func => instance Obj.
    function User (username,login, isloggedin){
        this.username = username; // here this.username is a global varible
        this.login = login;
        this.isloggedin = isloggedin;
        // console.log(this);
        // console.log(this.username);       
        
    }
    

let user1 = User('Harmeet','11',1) // we are accessing direct and storing to object literals
let user2 = User('Puchi','12',0) //Even we are storing in another varible, but we are overwritting the obj literals
console.log(user1); // O/P => User 2 values, as overwritten

//for the above case we have to use NEW keyword for constructor intialisation
user1 = new User('Harmeet','11',1)
user2 = new User('Puchi','12',0)
console.log(user1); 
console.log(user1.constructor);