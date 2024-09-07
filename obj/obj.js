// we can use function to enter multiple user data with help of new keyword

function user (id , name, salary){
    this.ki=id
    this.name=name
    this.salary=salary                                         
   }
   
   // now we can made a new function to enter the data of multiple users
   const user1= new user( 10 ,"neha" , 70000)
   const user2 =new user(11, "priya", 50000)
   console.log(user1)
   console.log(user2)
   