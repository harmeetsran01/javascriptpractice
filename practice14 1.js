class User {
    constructor(username) {
        this.username = username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) //calls parent constructor, also access parent values
        this.email = email
        this.password = password
        console.log(username);
        console.log(email);
        console.log(password);
        
    }
 addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
}
}
let objteacher = new Teacher('harmeetsran01','example.com','pass')