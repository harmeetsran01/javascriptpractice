class User {
    constructor(username, ...rest) {
        this.username = username
        this.age = rest[0],
        this.password = rest[1]
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
//or line : 7,  old way before class way introduce in ES6(new js)
User.prototype.encryptPassword = function (){
        return `${this.password}abc`
}


let user1 = new User('harmeetsran01',15,'pass')
console.log(user1.encryptPassword());
console.log(user1.changeusername());


