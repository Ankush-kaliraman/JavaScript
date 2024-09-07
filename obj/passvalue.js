// we can use pass by value.
// in which the value of any object is copied.
// when we use pass by value a new copy is created 

let name ="ankush"
let newname= name;

name='harish';

console.log(name);
console.log(newname)

// pass by reference
// in this there is not a copy is formed . both will target same memory
// object is non premtive
const user ={ name: 'sharma', age:20, class: 'btech',}
const user2= user;
// now if we want to change the value of any one it will change in both object
// object and array are non primtive
user.name ='harii'
console.log(user,user2)

//array
let arr=[10,22,3,4,5]
let arr2 =arr;
arr2[1]=10
console.log(arr,arr2)