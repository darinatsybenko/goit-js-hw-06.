const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onForm);

function onForm(event) {
event.preventDefault();
const {elements: {email, password}} = event.currentTarget;

if(email.value === '' || password.value === '') {
 alert('всі поля повинні бути заповнені')
}
 formEl.reset();
}
