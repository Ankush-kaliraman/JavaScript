//this is a higher order finction . it is call back when we a fn in same function 

function anku(n, fn){
    // fn is a call back function
    //anku is higher order function
    console.log(n*n);
fn(n+n)
    
}
anku(13, abc);
function abc(n){
    console.log(n-2);
    
}

// the function which we see on javascript is not a part of javascript . it is the part of the browser function
// like   getElementById it is the part of browser not js.
//SetTimer also a browser functionallity. it only triger the function 
// it is a asyncronous functionallity
