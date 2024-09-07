// maps can use any type of key in map

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Get the Keys
  const keys = Object.keys(person);
  console.log(keys)

  // in map we have A key and corresponding value
  let a= new Map()
  a.set(1, 'hii')
  a.set(true ,'welcome')
  a.set('3', 'const')
  console.log(a)

  // it can be converted into object

  let ammy ={ name:'deny',
    age :20
  }
  let hina = new Map()
  hina.set(ammy,100)
  console.log(hina)


  // we can get keys and values

  let ammi = new Map( 
    [ 
      ['tomato',20],
      ['potato',40],
      [true,66],

    ]
  )
  console.log(ammi.keys())

  for(let hari of ammi.keys()){console.log(hari)}

  // we can convert object into map

  let rami  = {
    name: 'jone',
    age: 20,

  }
  console.log(Object.entries(rami)) // it 1st convert into array form then we can convert into map
  let map =new Map(Object.entries(rami))
  console.log(map)