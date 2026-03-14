const temp = document.querySelectorAll('.square')
const body = document.querySelector('body')

temp.forEach((e)=>{
let color = e.id
e.style.background = `${color}`
e.addEventListener("click",(x)=>{
    console.log(x.target.id)    
        body.style.background = `${x.target.id}`
    })
})



