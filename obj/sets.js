// set is a collection of unique and unordered list.

const example =new Set()
console.log(example)

example.add(23)
example.add( 47)
example.add( 47)
console.log(example)


// we can also delete the values 
example.delete(23)
console.log(example)

// we can convert the array into sets 
const a=[3,5,7,8,67,,56,4,5,45,45,45,,6,4,543,6,4,3,5,7,8,67,,56,4,5,45,45,45,,6,4,543,6,4]
const b = new Set(a)
console.log(b)


// we can also convert sets into array with the the help of Array.from()

const c= Array.from(b)
console.log(c)