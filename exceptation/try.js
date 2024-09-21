// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The try and catch keywords come in pairs:

try{ x= undefined;
    console.log(x[2]);
    
}
catch{console.log('error in file');
}
finally{ console.log('it will run with any error');
}