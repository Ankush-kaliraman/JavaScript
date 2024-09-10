const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');

if(height==' ' || NaN(height) || height<0){
    result.innerHTML='plz give valid value';}
   else if(weight==' ' || NaN(weight) || weight<0){
        result.innerHTML='plz give valid value';
    
    }
    else{
      const bmi =(weight/  ((height*height)/1000)).toFixed(2);
    
result.innerHTML=`<span> ${bmi} </span>`};
})