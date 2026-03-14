// Static
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){ 
        return `123`
    }
    /*
    Static function cannot be used by instance obj outside the class
    neither by parent nor by child
    it is meant to be used inside the class or without instance
    A static function (static method) is a method that belongs
    to the class itself, not to the objects (instances) of the class.
    */
}

const user = new User('ABC')
// console.log(user.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const user1 = new Teacher('Harjot', 'harjot@example.com')
user1.logMe()
console.log(User.createId());

class Company {
  static company = "Google";
}

console.log(Company.company);