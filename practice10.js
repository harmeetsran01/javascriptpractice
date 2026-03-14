const promise1 = new Promise((resolve,reject)=>{
        // dp am async task
        // DB calls, network call, settimeout, cryptograohy
        setTimeout(()=>{
            console.log("Async Task is complete");
            resolve()        
            // resolve parameter has connection with then(). resolve -> then()
        },1000)
        
    });
    promise1.then(()=>{
        console.log('Promise consumed');        
    })

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
        
    },1000)
}).then(()=>{
    console.log('Async 2 resolved');
    
})


// passing values using resolve
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            username:'Harmeet',
            email:'harmeetsran01@gmail.com'
        })
    }, 1000);
})

promise3.then((obj)=>{ //passed through resolved
console.log(obj);
})

// 4
const promise4 = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username:'Meet',
                password:'123'
            })
        }
        else{
            reject('ERRoR: Something went wrong')
        }
    }, 1000);
})

// let usernameglobal = promise4.then((obj)=>{
promise4.then((obj)=>{
console.log(obj);
return obj.username
})
.then((somethingReturned)=>{
    console.log(somethingReturned);    
})
.catch((e)=>{
console.log(e);
})
// console.log(usernameglobal); 
//Will return Promise is pending
.finally(()=>{ //default it will be done automatically after sometime
console.log('Promise is either resolved or rejected');
})

// 5
const promise5 = new Promise((resolve,reject)=>{
setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                username:'JavaScript',
                password:'123'
            })
        }
        else{
            reject('ERRoR: JS 5 went wrong')
        }
    }, 1000);
})

// for DB call
// async await func actually wait for promise to return a element either resolve or reject
// when await is comeplete it is done
// refer function name to async function ... is a good practice to make db call
async function consumePromiseFive (){
    try{
        const response = await promise5 //refereing object line:75
        console.log(response);    
    }
    catch(e){
        console.log(e);        
    }
}

consumePromiseFive()

async function getAllUsers() {
    try{
    const response = await fetch(
        'https://api.github.com/users/harmeetsran01'
    )    
    console.log(typeof response);
    console.log(response);
    // const data = response.json()
    }
    catch(e){
        console.log(e);    
    }
}
// getAllUsers()


// new concept
// Immediately Invoked Function Expression (IIFE). ()()
(async () => {
    try{
    console.log('....................................................................');
    const response = await fetch(
        'https://api.github.com/users/harmeetsran01'
    )    
    console.log(typeof response);
    console.log(response);
    // const data = await response.json()
    }
    catch(e){
        console.log(e);    
    }
})()

// or

// const asyncgonawork = async () => {
//     try{
//     console.log('....................................................................');
//     const response = await fetch(
//         'https://api.github.com/users/harmeetsran01'
//     )    
//     console.log(typeof response);
//     console.log(response);
//     // const data = response.json()
//     }
//     catch(e){
//         console.log(e);    
//     }
// }

// asyncgonawork();

fetch(
        'https://api.github.com/users/harmeetsran01'
    ).then((response)=>{
    console.log(response);
    }).catch((e)=>{
        console.log(e);
    })
