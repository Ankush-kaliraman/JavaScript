// we can ad to string with the help of bactics
console.log(`${'hello'} ${'duniya'}`)

// to compare any word we can use endwith
const a = "kaliramana"
.endsWith('ana')
console.log(a)

// also we have keyword include . use for any word is present in it or not.
const b = "kaliramana"
.includes('ana')
console.log(b)

// padEnd is a keyword which is use for to increase the length of string
// it will add something new keyword which we want 

const c = "kaliramana"
.padEnd(12, '!')
console.log(c)

// same like padend we can use padStart
const d = "kaliramana"
.padStart(12, '!')
console.log(d)

//replace is also like that
const e = "kaliramana"
.replace('ana', 'ni')
console.log(e)

//.lowercase , .uppercase , .setdate, .setmonth, etc

