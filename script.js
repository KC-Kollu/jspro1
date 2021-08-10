const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

//Show Input Error Msg 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Input Success Msg 
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Event Listeners using If Else
form.addEventListener('submit', function(e){
   e.preventDefault();
    checkRequired([username, email, password, repassword]);
});

// Event Listeners using If Else
form.addEventListener('submit', function(e){
   e.preventDefault();
   if(username.value === ''){
     showError(username, 'Username is required');
   } else{
     showSuccess(username);
   }
   if(email.value === ''){
     showError(email, 'Email is required');
   } else if(!validateEmail(email.value)){
       showError(email,'Email is not valid');
   } else{
     showSuccess(email);
   }
   if(password.value === ''){
     showError(password, 'Password is required');
   } else{
     showSuccess(password);
   }
   if(repassword.value === ''){
     showError(repassword, 'Re Enter Your Password');
   } else{
     showSuccess(repassword);
   }
});

