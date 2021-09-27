const form = document.getElementById('register-form');
const errorMessages = document.getElementById('error-messages');

errorMessages.style.display = 'none';

form.addEventListener('submit', validateForm);

function validateForm(event) {

    let formDataError = false;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const pwd = document.getElementById('pwd');
    const pwdCheck = document.getElementById('pwd-check');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const addressLine = document.getElementById('addressLine');
    const city = document.getElementById('city');
    const postalCode = document.getElementById('postalCode');
    const province = document.getElementById('province');
    const country = document.getElementById('country');
    
    errorMessages.innerHTML = "";

    // validate user info
    
    if(firstName.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a first name</p>`;
        firstName.style.border = "solid red 2px";
        formDataError = true;
    } else {
        firstName.style.border = 'none';
    }

    if(lastName.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a last name</p>`;
        lastName.style.border = "solid red 2px";
        formDataError = true;
    } else {
        lastName.style.border = 'none';
    }

    if(email.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a valid email</p>`;
        email.style.border = "solid red 2px";
        formDataError = true;
    } else {
        email.style.border = 'none';
    }

    if(username.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please create a username</p>`;
        username.style.border = "solid red 2px";
        formDataError = true;
    } else {
        username.style.border = 'none';
    }


    if(pwd.value.trim().length < 8){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please create a password minimum 8 characters</p>`;
        pwd.style.border = "solid red 2px";
        formDataError = true;
    } else {
        pwd.style.border = 'none';
    }

    if(pwdCheck.value.trim().length === 0 ){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please re-enter password</p>`;
        pwdCheck.style.border = "solid red 2px";
        formDataError = true;
    } else if (pwdCheck.value !== pwd.value){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Passwords do not match</p>`;
        pwdCheck.style.border = "solid red 2px";
        formDataError = true;
    } else {
        pwdCheck.style.border = 'none';
    }

    // validate user birthday

    if(day.value === 'day'){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please select a day</p>`;
        day.style.border = "solid red 2px";
        formDataError = true;
    } else {
        day.style.border = 'none';
    }
    
    if(month.value === 'month'){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please select a month</p>`;
        month.style.border = "solid red 2px";
        formDataError = true;
    } else {
        month.style.border = 'none';
    }

    if(year.value === 'year'){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please select a year</p>`;
        year.style.border = "solid red 2px";
        formDataError = true;
    } else {
        year.style.border = 'none';
    }


    // validate user address

    if(addressLine.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter an address</p>`;
        addressLine.style.border = "solid red 2px";
        formDataError = true;
    } else {
        addressLine.style.border = 'none';
    }

    if(city.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a city</p>`;
        city.style.border = "solid red 2px";
        formDataError = true;
    } else {
        city.style.border = 'none';
    }

    if(postalCode.value.trim().length === 0){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a postal code</p>`;
        postalCode.style.border = "solid red 2px";
        formDataError = true;
    } else {
        postalCode.style.border = 'none';
    }



    // validate postal code pattern 

    const regex = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i
    let regexObject = RegExp(regex);

    if(!regexObject.test(postalCode.value)){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please enter a valid postal code</p>`;
        postalCode.style.border = "solid red 2px";
        formDataError = true;
    } else {
        postalCode.style.border = 'none';
    }

    if(province.value === 'province'){
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please select a province</p>`;
        province.style.border = "solid red 2px";
        formDataError = true;
    } else {
        province.style.border = 'none';
    }

  

    if (formDataError){
        event.preventDefault();
    }

}