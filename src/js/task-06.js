const input = document.querySelector('#validation-input');


input.addEventListener('blur', colorInput);

function colorInput() {

    if(input.dataset.length != input.value.length) {
        input.classList.remove('invalid');
       return input.classList.add('valid');
    }
    
        input.classList.remove('valid');
       return input.classList.add('invalid');
    
}