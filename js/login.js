const input = document.querySelector(".Login__input");
const buttom = document.querySelector(".login__buttom");
const form = document.querySelector(".login-form");

const validateInput = ({  target  }) =>{
    if(target.value.length > 2){
        buttom.removeAttribute('disabled');
        return;
    } 
    buttom.setAttribute('disabled', '');
}
const handleSubmit = (event) =>{
    event.preventDefault();
    
   localStorage.setItem('player', input.value);
   window.location = 'pages/game.html'
}
input.addEventListener('input',  validateInput);

form.addEventListener('submit',  handleSubmit);