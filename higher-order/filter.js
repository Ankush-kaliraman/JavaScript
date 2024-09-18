// FILTER
// we will now study filter which help us to fi;ter the functions

const heroes=[ 'ram', 'syam','sita']
const withhero =heroes.filter((w)=>{ 
    return  w.endsWith('am')
  })
  console.log(withhero)

  // shoping cart
  const cart =[100,299,800,345,626]
  const cartsum =cart.reduce((a,b)=> a+b)
  console.log(cartsum)
  // CHECK IS IT NUMBER

  const check = cart.every((c)=> typeof c=="number")
  console.log(check);
  // greate than some value 
  const greater = cart.find((g)=> g>200)
  console.log(greater);
  