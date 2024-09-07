//create a object
var emp ={
    name:"anku",
    age:20,

}
let helo = Object.keys(emp).forEach((helo)=> console.log(helo))
//console.log(keys)
//chaining method

//valu method
console.log(Object.values(emp))

// for both
//known as arary of arrays
const both = Object.entries(emp)
console.log(both)

// we can change it into the objects
var back =Object.fromEntries(both)
console.log(back)



// we can use object as a clone with the help of assign property

const clone = Object.assign({},emp)
console.log(clone)


// we cqan also freeze the things or any function with the help of freeze property 

Object.freeze(emp)
// if we want to manuplate we can't
emp.name="suresh"
console.log(emp)

// we can also check is any function is freeze or not

 const hii =(Object.isFrozen(emp))
 console.log(hii)


 // with the help of decstroctur we can change the Value in terminal
 
 Object.defineProperties(emp , {
   email:{  value :jone,
    writable :false},
    id:{val }

 })
