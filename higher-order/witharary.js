// const num = [1,3,5,6,8,9];
// const phone = arr => {
//     let total =0;
//     arr.forEach(element => {
//         return total=total+element;
//     });
//     return total
// }
// console.log(phone(num));


// self interval is a keyword that is used for itrate automatically acc. to given period of time
// uper case

const heroes = ['ram', 'syam' , 'hanuman', 'krishna']
heroes.forEach((el)=>{ const hii= el.toUpperCase(); 
    console.log(hii)
})

// we can do same with map function with arrow
heroes.map((h)=> console.log(h.toUpperCase()))

// array function is used in many cases like to store the data of softwares etc like in item between 2000
// 30000 


// FILTER
// we will now study filter which help us to fi;ter the functions
const withhero =heroes.filter((w)=>{ 
  return  w.endsWith('am')
})
console.log(withhero)