// Conditions checking the registration page
const username = document.getElementById('username');
const password = document.getElementById('password');
const realname = document.getElementById('realname');
const address = document.getElementById('address');
const errorName = document.getElementById('username-err');
const errorPw = document.getElementById('userpassword-err');
const errorRealName = document.getElementById('realname-err');
const errorAddress = document.getElementById('address-err');

username.addEventListener('input', function (event) {
    const patternName = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);

    if (valid) {
        errorName.style.display = 'none';
    } else {
        errorName.innerHTML = "Please enter the valid name";
        errorName.style.display = 'block';
        errorName.style.color = "red";
    }
});

password.addEventListener('input', function (event) {
    const patternName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);

    if (valid) {
        errorPw.style.display = 'none';
    } else {
        errorPw.innerHTML = "Please enter the valid password";
        errorPw.style.display = 'block';
        errorPw.style.color = "red";
    }
});

realname.addEventListener('input', function (event) {
    const patternName = /^.{5,}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);

    if (valid) {
        errorRealName.style.display = 'none';
    } else {
        errorRealName.innerHTML = "Please enter min 5 characters";
        errorRealName.style.display = 'block';
        errorRealName.style.color = "red";
    }
});

address.addEventListener('input', function (event) {
    const patternName = /^.{5,}$/;
    const currentValue = event.target.value;
    const valid = patternName.test(currentValue);

    if (valid) {
        errorAddress.style.display = 'none';
    } else {
        errorAddress.innerHTML = "Please enter min 5 characters";
        errorAddress.style.display = 'block';
        errorAddress.style.color = "red";
    }
});
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

