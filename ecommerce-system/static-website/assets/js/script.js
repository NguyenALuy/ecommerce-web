// Conditions checking the registration page
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var errorName = document.querySelector('#username-err');

username.addEventListener('input', function (event) {
    var patternName = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    var currentValue = event.target.value;
    var valid = patternName.test(currentValue);

    if (valid) {
        errorName.style.display = 'none';
    } else {
        errorName.style.display = 'block';
    }
});