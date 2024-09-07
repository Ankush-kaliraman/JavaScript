// this is a inbult library function 
// we can add , delete, replce the elements esily

// syntex of splice
// array.splice(start index, delete count, parametres)

// delete 
// array.slice(start index, delete count)
let a = ["i", "love", "you", "so", "much"]
a.splice(1,3)
console.log(a)

// replace
//array.splice(start index, delete count, parametres)
let b = ["i", "love", "you", "so", "much"]
 

 b.splice(0,1, "hello");
 console.log(b) 

 // add make delete count 0
 let c = ["i", "love", "you", "so", "much"]
 c.splice(1,0, "will")
 console.log(c)
 // we can also add at the last with negative 
 let d=[1,2,4,6,8]
 d.splice(-1,0,9,20)
 console.log(d)

 // we can also add multiple aray no with each other CONCAT
 let e=d.concat([79,98], 80)
 console.log(e)