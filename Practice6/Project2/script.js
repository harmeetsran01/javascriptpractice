const clock = document.getElementById('span')
//setInterval have to enter METHOD as an parameter and given time to run interval of time
setInterval(()=>{
    let date = new Date()
    clock.innerText = date.toLocaleTimeString()
},1000);
