// Conditions checking the registration page
const username = document.querySelector('#username');
const password = document.getElementById('password');
const realname = document.getElementById('realname');
const address = document.getElementById('address');
const errorName = document.querySelector('.username-err');
const errorPw = document.querySelector('.userpassword-err');
const errorChar = document.querySelector('.char-err');



username.addEventListener('input', checkRegexName);
password.addEventListener('input', checkRegexPassword);
realname.addEventListener('input', checkRegexChar);
address.addEventListener('input', checkRegexChar);

function checkErrorName(valid, error){
    if (valid) {
        error.style.display = 'none';
    } else {
        error.innerHTML = "Please enter the valid name";
        error.style.display = 'block';
        error.style.color = "red";
    }
}
function checkRegexName(event) {
    const patternName = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);
    checkErrorName(valid, errorName);
};

function checkErrorPassword(valid, error){
    if (valid) {
        error.style.display = 'none';
    } else {
        error.innerHTML = "Please enter the valid password";
        error.style.display = 'block';
        error.style.color = "red";
    }
}
function checkRegexPassword (event) {
    const patternName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);
    checkErrorPassword(valid, errorPw);
};

function checkErrorChar(valid, error){
    if (valid) {
        error.style.display = 'none';
    } else {
        error.innerHTML = "Please enter min 5 characters";
        error.style.display = 'block';
        error.style.color = "red";
    }
}

function checkRegexChar (event) {
    const patternName = /^.{5,}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);
    checkErrorChar(valid, errorChar);
};

//Check confirmation password
const confirm_password = document.getElementById('confirm-pass');
confirm_password.addEventListener('input', validate_password);
function validate_password() {
    const pass = document.getElementById('password').value;
    const confirm_pass = document.getElementById('confirm-pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong-pass').style.color = 'red';
        document.getElementById('wrong-pass').innerHTML
            = '☒ Use same password';
    } else {
        document.getElementById('wrong-pass').style.color = 'green';
        document.getElementById('wrong-pass').innerHTML =
            '🗹 Password Matched';
    }
}

//Check the 