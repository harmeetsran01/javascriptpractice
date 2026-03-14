const obj1 = {
    id: 1,
    name:"Harmeet Singh",
    obj2:{class:"BCA",
        obj3:{
            name3:"This is end child object"
        }
    }
    
}

tempobj = Object.assign({},obj1)
tempobj = Object.keys(obj1)
tempobj = Object.values(obj1)
tempobj = {...obj1} //exract values same as assign function
console.log(tempobj);

// document.getElementById("hi").textContent = JSON.stringify(tempobj);


//de-structure
const {name} = obj1 //It exacts the value of name and store to variable name
console.log(name)
const {obj2 : puchi } = obj1 //puchi is a varible
console.log(puchi) //same result

//same as below
const navbar = (company) => {
company:"abc"
}
navbar(company = "abc")

// func
let func = () => {
    console.log("Hi")
}

// spread or rest operator

function calculation(val1,...num1){
    return num1 //returns array
}
console.log(calculation(100,200,300)) 

//Pass obj to func
const user = {
    username:"Sahil",
    id:0o7
}

function handleuser(anyobj){
console.log(`Username is ${anyobj.username} and id is ${anyobj.id}`);
}
handleuser(user)
handleuser({username:"Harmeet",id:100})

//Pass array to func
const myNewArray = [100,200,300,400]
function returnSeconValue(getarray){
    return getarray[1]
}
console.log(returnSeconValue(myNewArray));
