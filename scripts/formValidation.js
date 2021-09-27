const form = document.getElementById('register-form');
const errorMessages = document.getElementById('error-messages');

errorMessages.style.display = 'none';

form.addEventListener('submit', validateForm);