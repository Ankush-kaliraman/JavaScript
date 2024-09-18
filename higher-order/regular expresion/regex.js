// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.
let reg = /pw/gi
const a = "Pw is the best pPWsg. jhw pw gwrdjv pu pwegh"
const result = reg.test(a)
console.log(result);
const b = a.match(reg)
console.log(b);

// REPLACE
// it is also use in very case senstive language
 let web = "https:ankush-kaliraman.com/50%sisai"
// now in want to replace 40% with - 
let change = web.replace(/20%/,'-')
console.log(change);
// we cant do it. it may have different no tha what we can 
// we use pattern maching
// replace is very important . it is use in many backend projects like change the data with database
let change1 = web.replace(/\d\d%/,'-')
console.log(change1);


//BEST PLATFORM FOR REGULAR EXPRESSION
// regexr.com