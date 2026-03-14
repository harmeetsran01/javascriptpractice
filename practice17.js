/*
Getter Setter, to stop access certain varible or property
*/
class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase() //_to make it private, could access _password outside class
    }
    set password(value){
        this._password = value
    }
}
let user1 = new User('example.com','abc')
console.log(user1.password);
