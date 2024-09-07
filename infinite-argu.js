//make a function without providing arguments
function sum(){
    //console.log(arguments)
    //reduce.(arguments) is not applicable
    // make a array to convert it
    const vice = Array.from(arguments)
    console.log(vice)
    let addition = vice.reduce(function(acc, bcc){
        return acc + bcc })
    
    return addition 
}

console.log(sum(1,2,3,4));