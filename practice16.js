/*
As we can not change value of PI of Maths
therefore there are some properties which stops you to 
overwrite over properties or to access them in another way
as
let PI = Math.Pi
OP=> 3.14 but we can not Math.Pi = 4
*/

const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);

const faltu = {
    name : 'faltu1',
    price:250,
    available: false
}

Object.defineProperty(faltu,'name',{
    writable : false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(faltu,'name'));


