document.querySelector('.submit').addEventListener('click', (event)=>{
    event.preventDefault();
    const firstName = document.form.first_name.value;
    const lastName = document.form.last_name.value;
    const email = document.form.email.value;
    const atpos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    const password = document.form.password.value;

    // //Error handlers
    const first_name_err = document.querySelector('.first_name_err');
    const first_icon_err = document.querySelector('.error_icon')

    const last_name_err = document.querySelector('.last_name_err');
    const last_icon_err = document.querySelector('.error_icon2');

    const email_err = document.querySelector('.email_err');
    const email_icon_err = document.querySelector('.error_icon3');
    
    const password_err = document.querySelector('.password_err');
    const password_icon_err = document.querySelector('.error_icon4');
    
    if(firstName == ''){
        first_name_err.textContent = "First Name cannot be empty ";
        first_icon_err.style.display = 'block';
    }else{
        first_name_err.textContent = '';
        first_icon_err.style.display = 'none';
    }
    if(lastName == ''){
        last_name_err.textContent = 'Last Name cannot be empty';
        last_icon_err.style.display = 'block';
    }else{
        last_name_err.textContent = '';
        last_icon_err.style.display ='none';
    }
    if(email == ''){
        email_err.textContent = 'Email cannot be empty';
        email_icon_err.style.display = 'block';
    }else if(atpos < 1 || (dotPos - atpos < 2)){
        email_err.textContent = 'Looks like this is not an Email'
        email_icon_err.style.display = 'block';
    }else{
        email_err.textContent = '';
            email_icon_err.style.display = 'none';
        }
    if(password == ''){
        password_err.textContent = 'Password cannot be empty';
        password_icon_err.style.display = 'block';
    }else{
        password_err.textContent = '';
        password_icon_err.style.display = 'none';
    }
   
})