// add element at last of array
let a=[10,20,30,40,50]
a.push(70)
console.log(a);
// we can also delete element at the last
a.pop()
console.log(a);
// add element at the beganing of array. unshift
a.unshift(5)
console.log(a)

// to remove element at the beganing of array . shift
a.shift()
console.log(a)
// they dont remove the space . only remove value
// we use slice which is use for add and remove element from array with space

let b= [10,20,30,44,50]
// b.splice(start index, end index) . not include end index mean include to n-1
console.log(b.slice(1,3));
console.log(b)

// we can copy the data without distrubing real data with slice
let c= b.slice()
b[0]=90;
console.log( b)
console.log(c)
 