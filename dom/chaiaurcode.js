const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body');
buttons.forEach(function (button){
    console.log(buttons);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id
        }
        // we can use any color as background with the help of target

        if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id}
            // now we can change the color of background with blue
            if(e.target.id=='blue'){
                body.style.backgroundColor='#212121'
            }
            if(e.target.id=='yellow'){
                body.style.backgroundColor='silver'
            }
    })
}
)
