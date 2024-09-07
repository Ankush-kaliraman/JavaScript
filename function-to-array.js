// we can create a function and convert it into array.
function sum(...name){
    console.log(name)
    let addition = name.reduce(function(acc,bcc){ 
    return acc+bcc})
    return addition
}
console.log(sum(1,2,3));